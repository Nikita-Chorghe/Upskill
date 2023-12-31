import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
    props;
  return (
    <ul className="list-group" style={{ marginTop: "20px" }}>
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
