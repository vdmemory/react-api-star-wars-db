const extractId = item => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
};

const transformPerson = person => {
  return {
    id: extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
    height: person.height,
    mass: person.mass
  };
};

const transformPlanet = planet => {
  return {
    id: extractId(planet),
    name: planet.name,
    population: planet.population,
    terrain: planet.terrain,
    climate: planet.climate,
    diameter: planet.diameter
  };
};

const transformStarship = starship => {
  return {
    id: extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    starshipClass: starship.starship_class,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    hyperdriveRating: starship.hyperdrive_rating
  };
};

export { transformPerson, transformPlanet, transformStarship };
