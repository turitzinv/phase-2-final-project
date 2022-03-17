import React from 'react'
import ItemCard from "./ItemCard";

function CurrentPackingList ({allItems}) {
const entirePackingList = allItems.map((item) => 
<ItemCard 
key={item.id}
name={item.item}
category={item.category}
/>
)

  return (
    <div>
      <h1>Packing List</h1>
      <ul className="items">{entirePackingList}</ul>
    </div>
  )
}

export default CurrentPackingList;