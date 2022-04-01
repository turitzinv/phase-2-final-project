import React from 'react'

function CategorySearch({ onSelectCategory, selectedCategory, displayCategoryList }) {
  return (
    <div className="dropdown">
      <label>
        Category Filter
        <select id="dropdown-content" name="category" 
        value={selectedCategory}
        onChange={onSelectCategory}
        >
         {displayCategoryList}
        </select>
      </label>
    </div>
  )
}

export default CategorySearch;
