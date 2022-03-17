import React from "react";
import ItemCard from "./ItemCard";

function CurrentPackingList({ allItems }) {
  const entirePackingList = allItems.map((item) => (
    <ItemCard key={item.id} name={item.item} category={item.category} />
  ));

  return (
    <div>
      <h1>Packing List</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{entirePackingList}</tbody>
      </table>
    </div>
  );
}

export default CurrentPackingList;
