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
  _imageBase = "https://starwars-visualguide.com/assets/img";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok)
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    return await res.json();
  }

  // People =>

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._trPerson);
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}/`);
    return this._trPerson(person);
  };

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  // Planets =>

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._trPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._trPlanet(planet);
  };

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };

  // Starships =>

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._trStarship);
  };

  getStarship = async id => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._trStarship(starship);
  };

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };
}
