const extractId = item => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
};

const transformPerson = person => {
  return {
    id: extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birthYear,
    eyeColor: person.eyeColor
  };
};

const transformPlanet = planet => {
  return {
    id: extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter
  };
};

const transformStarship = starship => {
  return {
    id: extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.costInCredits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargoCapacity
  };
};

export { transformPerson, transformPlanet, transformStarship };
