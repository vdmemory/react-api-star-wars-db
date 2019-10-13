import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import DemmySwapiService from "../../services/demmy-swapi-service";
import Header from "../header";

import RandomPlanet from "../random-planet";
// import PeoplePage from "../people-page";

import ErrorBoundry from "../error-boundry";

// import ItemDetails, { Record } from "../item-details/ItemDetails";
// import ItemList from "../item-list";

import { SwapiServiceProvider } from "../swapi-service-context/SwapiServiceContext";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-compnents";

// import Row from "../row";

import "./app.css";

export default class App extends Component {
  state = {
    swapiService: new DemmySwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DemmySwapiService : SwapiService;
      console.log(Service.name);
      return { swapiService: new Service() };
    });
  };

  render() {
    // const {
    //   getPerson,
    //   getStarship,
    //   getPersonImage,
    //   getStarshipImage,
    //   getAllPeople,
    //   getAllStarships
    // } = this.swapiService;

    // const personDetails = (
    //   <ItemDetails itemId={11} getData={getPerson} getImage={getPersonImage}>
    //     <Record field="gender" label="Gender" />
    //     <Record field="height" label="Height" />
    //     <Record field="mass" label="Mass" />
    //     <Record field="birthYear" label="BirthYear" />
    //   </ItemDetails>
    // );
    // const starshipDetails = (
    //   <ItemDetails
    //     itemId={10}
    //     getData={getStarship}
    //     getImage={getStarshipImage}
    //   >
    //     <Record field="model" label="Model" />
    //     <Record field="manufacturer" label="Manufacturer" />
    //     <Record field="starshipClass" label="Starship Class" />
    //   </ItemDetails>
    // );

    // const personItem = (
    //   <ItemList onItemSelected={() => {}}>
    //     {({ name }) => <span>{name}</span>}
    //   </ItemList>
    // );
    // const starshipItem = (
    //   <ItemList onItemSelected={() => {}}>
    //     {({ name }) => <span>{name}</span>}
    //   </ItemList>
    // );

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div>
            <Header onSeviceChange={this.onServiceChange} />
            <RandomPlanet />

            <ErrorBoundry>
              <PersonList />
              <PlanetList />
              <StarshipList />
            </ErrorBoundry>

            <ErrorBoundry>
              <PersonDetails itemId={11} />
              <PlanetDetails itemId={5} />
              <StarshipDetails itemId={9} />
            </ErrorBoundry>

            {/* <PeoplePage getPerson={getPerson} getPersonImage={getPersonImage} /> */}

            {/* <Row leftElem={personDetails} rightElem={starshipDetails} /> */}
            {/* <Row leftElem={personItem} rightElem={starshipItem} /> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
