import React from "react";

import "./item-list.css";
import withData from "../hoc-helper";
import SwapService from "../../services/swapi-service";

function ItemList({ itemList, onItemSelected, children }) {
  const items = itemList.map(item => {
    const { id } = item;
    const label = children(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });
  return <ul className="item-list list-group">{items}</ul>;
}

const { getAllPeople } = new SwapService();
export default withData(ItemList, getAllPeople);
