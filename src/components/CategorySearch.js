import React from 'react'

function CategorySearch({ onSelectCategory, selectedCategory, displayCategoryList }) {


// const uniqueCategoryList = categoryList.map((category, index) => {
//   if (category !== "All") {
//     return <option key={index}>{category}</option>
//   }
// })

  return (

    <div className="searchbar">
      <label>
        Category Filter
        <select name="category" 
        value={selectedCategory}
        onChange={onSelectCategory}
        >
         {displayCategoryList}
        </select>
      </label>
    </div>
//     <div className="searchbar">
//       <label>Category Filter</label>
//       <input 
//         type="text"
//         id="search"
//         placeholder="Type a category to filter..."
//         onChange={(e) => onSearchFilter(e.target.value)}
//         value = {search}
//       />
//     </div>
  )
}

export default CategorySearch;
