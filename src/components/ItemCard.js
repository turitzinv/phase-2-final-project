import React from "react";

function ItemCard({ name, category }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
    </tr>
  );
}

export default ItemCard;
