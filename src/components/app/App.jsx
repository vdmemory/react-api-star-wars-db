import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import DemmySwapiService from "../../services/demmy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/SwapiServiceContext";
import ErrorBoundry from "../error-boundry";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";

import "./app.css";

export default class App extends Component {
  state = {
    swapiService: new DemmySwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DemmySwapiService : SwapiService;
      return { swapiService: new Service() };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div>
            <Header onSeviceChange={this.onServiceChange} />
            <ErrorBoundry>
              <RandomPlanet />
            </ErrorBoundry>

            <ErrorBoundry>
              <PeoplePage />
            </ErrorBoundry>

            <ErrorBoundry>
              <PlanetPage />
            </ErrorBoundry>

            <ErrorBoundry>
              <StarshipPage />
            </ErrorBoundry>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
