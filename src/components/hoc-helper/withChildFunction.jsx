import React from "react";

export default function withChildFunction(fn) {
  return Wrapped => {
    return props => {
      return <Wrapped {...props}>{fn}</Wrapped>;
    };
  };
}
