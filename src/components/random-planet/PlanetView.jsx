import React from "react";
import PropTypes from "prop-types";

export default function PlanetView({ planet }) {
  const { id, name, population, climate, terrain } = planet;
  return (
    <>
      <img
        alt="planet"
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Climate:</span>
            <span>{climate}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Terrain:</span>
            <span>{terrain}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
PlanetView.defaultProps = {
  id: 5,
  name: "Planet",
  population: "Population",
  climate: "Climate",
  terrain: "Terrain"
};
PlanetView.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  population: PropTypes.string,
  climate: PropTypes.string,
  terrain: PropTypes.string
};
