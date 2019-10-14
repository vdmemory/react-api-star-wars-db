import React from "react";

import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helper";

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

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

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderYearAndName)),
  mapPersonMethodsToProps
);

const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderTerrainAndName)),
  mapPlanetMethodsToProps
);

const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
