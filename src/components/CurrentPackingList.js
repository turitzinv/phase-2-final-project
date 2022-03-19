import React from "react";
import ItemCard from "./ItemCard";

function CurrentPackingList({ allItems, handleDeleteItem }) {
  const entirePackingList = allItems.map((item) => (
    <ItemCard
      key={item.id}
      name={item.item}
      category={item.category}
      onDeleteItem={handleDeleteItem}
      item={item}
    />
  ));

  const categoryList = allItems.map((item) => {
    return item.category;
  });

  console.log(categoryList);

  let uniqueCategoryList = [];
  categoryList.forEach((category) => {
    if (!uniqueCategoryList.includes(category)) {
      uniqueCategoryList.push(category);
    }
  });

  const currentCategoryList = uniqueCategoryList.map((category) => {
    return <li key={category} className="current-categories">{category}</li>;
  });

  console.log(uniqueCategoryList, "unique category list");

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
      <h3>Current Category List</h3>
      {currentCategoryList}
    </div>
  );
}

export default CurrentPackingList;
