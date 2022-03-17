import React from "react";

function ItemCard({ name, category }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td><button>Delete</button></td>
    </tr>
  );
}

export default ItemCard;
