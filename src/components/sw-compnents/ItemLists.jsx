import React from "react";
import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose
} from "../hoc-helper";

const renderYearAndName = ({ birthYear, name }) => (
  <span>
    {name} ({birthYear})
  </span>
);
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);
const renderTerrainAndName = ({ terrain, name }) => (
  <span>
    {name} ({terrain})
  </span>
);

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};
const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};
const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderYearAndName)
)(ItemList);
const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderTerrainAndName)
)(ItemList);
const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);

// f(x,y); f(x)(y); compose(a, b, c)(value) = a(b(c(value)));

export { PersonList, PlanetList, StarshipList };
