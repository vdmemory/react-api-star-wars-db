import React from "react";
import "./item-list.css";

export default function ItemList({ itemList, onItemSelected, children }) {
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
