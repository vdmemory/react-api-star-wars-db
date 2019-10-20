import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import DemmySwapiService from "../../services/demmy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/SwapiServiceContext";
import ErrorBoundry from "../error-boundry";
import Header from "../header";
import RandomPlanet from "../random-planet";
import Crawl from "../crawl-component";
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  LoginPage,
  SecretPage
} from "../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StarshipDetails } from "../sw-compnents";

import "./app.css";
import not404 from "./404.png";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };
  onLogin = () => {
    this.setState(({ isLoggedIn }) => {
      return { isLoggedIn: true };
    });
  };
  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DemmySwapiService : SwapiService;
      return { swapiService: new Service() };
    });
  };
  render() {
    const { isLoggedIn, swapiService } = this.state;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService}>
          <Router>
            <div>
              <Header onSeviceChange={this.onServiceChange} />
              <ErrorBoundry>
                <RandomPlanet />
              </ErrorBoundry>
              <Switch>
                <Route path="/" component={Crawl} exact />
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
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  )}
                />
                <Route
                  path="/secret"
                  render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                />
                <Route
                  render={() => (
                    <div className="jumbotron" style={{ display: "flex" }}>
                      <img
                        style={{
                          width: "660px",
                          height: "540px",
                          margin: "auto"
                        }}
                        src={not404}
                        alt="Page not found"
                      />
                    </div>
                  )}
                />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
