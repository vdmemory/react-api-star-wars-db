import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Loader from "../loader";

import "./person-details.css";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loader: false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loader: true });
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    !personId ||
      this.swapiService.getPerson(personId).then(person => {
        this.setState({
          person,
          loader: false
        });
      });
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }
    if (this.state.loader) {
      return <Loader />;
    }
    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    return (
      <div className="person-details card">
        <img
          alt="person"
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
