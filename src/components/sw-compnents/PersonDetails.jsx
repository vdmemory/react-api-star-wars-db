import React from "react";

import ItemDetails, { Record } from "../item-details/ItemDetails";
import { withSwapiService } from "../hoc-helper";

function PersonDetails(props) {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender:" />
      <Record field="height" label="Height:" />
      <Record field="mass" label="Mass:" />
      <Record field="birthYear" label="BirthYear:" />
    </ItemDetails>
  );
}

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImage: swapiService.getPersonImage
  };
};

export default withSwapiService(PersonDetails, mapMethodsToProps);
