import React from "react";

function ItemCard({ item, name, category, onDeleteItem }) {

  function handleDeleteClick() {
    fetch(`http://localhost:3001/list/${item.id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => onDeleteItem(item))
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td><button onClick={handleDeleteClick}>Delete</button></td>
    </tr>
  );
}

export default ItemCard;
