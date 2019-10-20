import React from "react";
import ItemDetails, { Record } from "../item-details/ItemDetails";
import { withSwapiService } from "../hoc-helper";

function StarshipDetails(props) {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model:" />
      <Record field="manufacturer" label="Manufacturer:" />
      <Record field="starshipClass" label="Starship Class:" />
    </ItemDetails>
  );
}

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImage: swapiService.getStarshipImage
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
