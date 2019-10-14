export default class DummySwapiService {
  _people = [
    {
      id: 1,
      name: "Frodo Baggins [TEST DATA]",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown",
      height: "102",
      mass: "38"
    },
    {
      id: 2,
      name: "Bilbo Baggins [TEST DATA]",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown",
      height: "104",
      mass: "41"
    },
    {
      id: 3,
      name: "Frodo Baggins [TEST DATA]",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown",
      height: "102",
      mass: "38"
    },
    {
      id: 4,
      name: "Bilbo Baggins [TEST DATA]",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown",
      height: "104",
      mass: "41"
    },
    {
      id: 5,
      name: "Frodo Baggins [TEST DATA]",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown",
      height: "102",
      mass: "38"
    }
  ];

  _planets = [
    {
      id: 1,
      name: "Earth [TEST DATA]",
      population: "7.530.000.000",
      terrain: "swamp, jungles",
      climate: "temperate",
      diameter: "12.742 km"
    },
    {
      id: 2,
      name: "Venus [TEST DATA]",
      population: "not known",
      terrain: "rock, desert, mountain, barren",
      climate: "temperate, arid",
      diameter: "12.104 km"
    },
    {
      id: 3,
      name: "Earth [TEST DATA]",
      population: "7.530.000.000",
      terrain: "swamp, jungles",
      climate: "temperate",
      diameter: "12.742 km"
    },
    {
      id: 4,
      name: "Venus [TEST DATA]",
      population: "not known",
      terrain: "rock, desert, mountain, barren",
      climate: "temperate, arid",
      diameter: "12.104 km"
    },
    {
      id: 5,
      name: "Earth [TEST DATA]",
      population: "7.530.000.000",
      terrain: "swamp, jungles",
      climate: "temperate",
      diameter: "12.742 km"
    }
  ];

  _starships = [
    {
      id: 1,
      name: "USS Enterprise [TEST DATA]",
      model: "NCC-1701-C",
      manufacturer: "Northrop Grumman Shipbuilding",
      costInCredits: "not known",
      length: "approx 300 meters",
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100,
      starshipClass: "Galaxy-class",
      hyperdriveRating: "4"
    },
    {
      id: 2,
      name: "USS Enterprise [TEST DATA]",
      model: "NCC-1701-C",
      manufacturer: "Northrop Grumman Shipbuilding",
      costInCredits: "not known",
      length: "approx 300 meters",
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100,
      starshipClass: "Galaxy-class",
      hyperdriveRating: "4"
    },
    {
      id: 3,
      name: "USS Enterprise [TEST DATA]",
      model: "NCC-1701-C",
      manufacturer: "Northrop Grumman Shipbuilding",
      costInCredits: "not known",
      length: "approx 300 meters",
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100,
      starshipClass: "Galaxy-class",
      hyperdriveRating: "4"
    },
    {
      id: 4,
      name: "USS Enterprise [TEST DATA]",
      model: "NCC-1701-C",
      manufacturer: "Northrop Grumman Shipbuilding",
      costInCredits: "not known",
      length: "approx 300 meters",
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100,
      starshipClass: "Galaxy-class",
      hyperdriveRating: "4"
    },
    {
      id: 5,
      name: "USS Enterprise [TEST DATA]",
      model: "NCC-1701-C",
      manufacturer: "Northrop Grumman Shipbuilding",
      costInCredits: "not known",
      length: "approx 300 meters",
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100,
      starshipClass: "Galaxy-class",
      hyperdriveRating: "4"
    }
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async () => {
    return this._planets[0];
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[0];
  };

  getPersonImage = () => {
    return `https://vignette.wikia.nocookie.net/lotr/images/4/41/%D0%A4%D1%80%D0%BE%D0%B4%D0%BE_%D0%91%D1%8D%D0%B3%D0%B3%D0%B8%D0%BD%D1%81.jpg/revision/latest?cb=20141209145510&path-prefix=ru`;
  };

  getStarshipImage = () => {
    return `https://www.super-hobby.ru/zdjecia/4/1/4/3012_rd.jpg`;
  };

  getPlanetImage = () => {
    return `https://kipmu.ru/wp-content/uploads/kpzml.jpg`;
  };
}
