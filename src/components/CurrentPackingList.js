import React from "react";
import ItemCard from "./ItemCard";

function CurrentPackingList({ allItems }) {
  const entirePackingList = allItems.map((item) => (
    <ItemCard key={item.id} name={item.item} category={item.category} />
  ));

  return (
    <div>
      <h1 className="header">Packing List</h1>
      <table id="packing-list-table">
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
