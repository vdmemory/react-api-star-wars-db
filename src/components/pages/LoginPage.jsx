import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default function LoginPage({ isLoggedIn, onLogin }) {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
}
LoginPage.defaultProps = {
  onLogin: () => {},
  isLoggedIn: false
};
LoginPage.propTypes = {
  onLogin: PropTypes.func,
  isLoggedIn: PropTypes.bool
};
