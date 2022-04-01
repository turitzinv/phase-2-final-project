import React from "react";
import ItemCard from "./ItemCard";
import CategorySearch from "./CategorySearch";

function CurrentPackingList({ allItems, handleDeleteItem, handleSelectCategory, selectedCategory, displayCategoryList }) {
  const entirePackingList = allItems.map((item) => (
    <ItemCard
      key={item.id}
      name={item.item}
      category={item.category}
      onDeleteItem={handleDeleteItem}
      item={item}
    />
  ));

  return (
    <div>
      <h1 className="header">Packing List</h1>
      <CategorySearch onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} displayCategoryList={displayCategoryList} />
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
