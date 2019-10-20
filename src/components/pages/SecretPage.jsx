import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default function SecretPage({
  isLoggedIn,
  title,
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive
}) {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3 className="display-4">{title}</h3>
        <div className="card border-success mb-3d">
          <p className="card-header">{textOne}</p>
          <div className="card-body">
            <p className="card-text">{textTwo}</p>
            <p className="card-text">{textThree}</p>
            <p className="card-text">{textFour}</p>
            <p className="card-text">{textFive}</p>
          </div>
        </div>
      </div>
    );
  }
  return <Redirect to="/login" />;
}
SecretPage.defaultProps = {
  isLoggedIn: false,
  title: "This page is full of secrets!!!",
  textOne: "Difficult to see. Always in motion is the future.",
  textTwo: "This page contains information about a confirmed future book.",
  textThree:
    "The content of the page may change dramatically as the product release approaches and more information becomes available.",
  textFour:
    "Discover the world of Star Wars' Jedi through this fun and fully interactive reading experience.",
  textFive:
    "Star Wars: The Secrets of the Jedi is the ultimate in-universe guide to the world of the Jedi, transporting young readers to a galaxy far, far away through interactive features, fascinating facts, and captivating insights. With thrilling original illustrations and amazing special features including lift-the-flaps, textures, and more, Star Wars: The Secrets of the Jedi is guaranteed to thrill the saga's legions of young fans."
};
SecretPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  title: PropTypes.string,
  textOne: PropTypes.string,
  textTwo: PropTypes.string,
  textThree: PropTypes.string,
  textFour: PropTypes.string,
  textFive: PropTypes.string
};
