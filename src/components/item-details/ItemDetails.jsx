import React, { Component, Children, cloneElement } from "react";
import PropTypes from "prop-types";
import Loader from "../loader";

import "./item-details.css";

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loader: false
  };
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImage !== prevProps.getImage
    ) {
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
    const { name } = item;
    return (
      <div className="item-details card">
        <img alt="item" className="item-image" src={image} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <ul className="list-group list-group-flush">
            {Children.map(this.props.children, child => {
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
    <li className="card-text list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}

ItemDetails.defaultProps = {
  getData: () => {},
  getImage: () => {},
  itemId: 11
};
ItemDetails.propTypes = {
  getData: PropTypes.func,
  getImage: PropTypes.func,
  itemId: PropTypes.any
};
