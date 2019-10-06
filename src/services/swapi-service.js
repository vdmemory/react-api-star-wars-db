import {
  transformPerson,
  transformPlanet,
  transformStarship
} from "./swapi-transform-data";

export default class SwapService {
  constructor() {
    this._trPerson = transformPerson;
    this._trPlanet = transformPlanet;
    this._trStarship = transformStarship;
  }

  _apiBase = "https://swapi.co/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok)
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    return await res.json();
  }

  // People =>

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._trPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._trPerson(person);
  }

  // Planets =>

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._trPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._trPlanet(planet);
  }

  // Starships =>

  async getAllStarships() {
    const res = await this.getResource(`/starship/`);
    return res.results.map(this._trPlanet);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starship/${id}/`);
    return this._trStarship(starship);
  }
}
