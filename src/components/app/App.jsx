import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import DemmySwapiService from "../../services/demmy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/SwapiServiceContext";
import ErrorBoundry from "../error-boundry";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { StarshipDetails } from "../sw-compnents";

import "./app.css";

export default class App extends Component {
  state = {
    swapiService: new SwapiService()
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
          <Router>
            <div>
              <Header onSeviceChange={this.onServiceChange} />
              <RandomPlanet />
              <Route
                path="/"
                render={() => <h2>WELCOME TO STAR WARS DB</h2>}
                exact
              />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" exact component={StarshipPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
