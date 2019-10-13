import React from "react";

import ItemDetails, { Record } from "../item-details/ItemDetails";
import { withSwapiService } from "../hoc-helper";

function PlanetDetails(props) {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population:" />
      <Record field="diameter" label="Diameter:" />
      <Record field="climate" label="Climate:" />
      <Record field="terrain" label="Terrain:" />
    </ItemDetails>
  );
}

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImage: swapiService.getPlanetImage
  };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);
