import React from 'react'

function CategorySearch({onSearchFilter, search}) {
  return (
    <div className="searchbar">
      <label>Category Filter</label>
      <input 
        type="text"
        id="search"
        placeholder="Type a category to filter..."
        onChange={(e) => onSearchFilter(e.target.value)}
        value = {search}
      />
    </div>
  )
}

export default CategorySearch;
