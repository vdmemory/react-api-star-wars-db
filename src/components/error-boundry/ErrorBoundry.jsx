import React, { Component } from "react";
import Error from "../error";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };
  componentDidCatch() {
    console.log("componentDidCatch()");
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <Error />;
    }
    return this.props.children;
  }
}
