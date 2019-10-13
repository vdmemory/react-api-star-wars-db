import React from "react";

import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helper";

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

//

const renderYearAndName = ({ birthYear, name }) => (
  <span>
    {name} ({birthYear})
  </span>
);

const mapPersonMethodToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderYearAndName)),
  mapPersonMethodToProps
);

//

const renderTerrainAndName = ({ terrain, name }) => (
  <span>
    {name} ({terrain})
  </span>
);

const mapPlanetMethodToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderTerrainAndName)),
  mapPlanetMethodToProps
);

//

const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

const mapStarshipMethodToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipMethodToProps
);

export { PersonList, PlanetList, StarshipList };
