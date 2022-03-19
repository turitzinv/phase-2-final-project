import React from 'react'

function CategorySearch() {
  return (
    <div className="searchbar">
      <label>Category Filter</label>
      <input 
        type="text"
        id="search"
        placeholder="Type a category to filter..."
        //value and onChange
      />
    </div>
  )
}

export default CategorySearch;
