import React, { Component, Children, cloneElement } from "react";

// import SwapiService from "../../services/swapi-service";
import Loader from "../loader";

import "./item-details.css";

export default class PersonDetails extends Component {
  // swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loader: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loader: true });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImage } = this.props;
    !itemId ||
      getData(itemId).then(item => {
        this.setState({
          item,
          image: getImage(item),
          loader: false
        });
      });
  }

  render() {
    const { item, loader, image } = this.state;

    if (!item) {
      return <span>Select a person from a list</span>;
    }

    if (loader) {
      return <Loader />;
    }
    // const { id, name, gender, birthYear, eyeColor } = item;
    const { name } = item;
    return (
      <div className="item-details card">
        <img alt="item" className="item-image" src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {Children.map(this.props.children, child => {
              // console.log(cloneElement(child));
              return cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export function Record({ item, field, label }) {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
      {/* <span>{field}</span> */}
    </li>
  );
}
