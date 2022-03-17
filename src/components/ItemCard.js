import React from 'react'

function ItemCard ({name , category}) {


  return (
    <li className="item">
      <h4>{name}</h4>
      <p>{category}</p>

    </li>
  )
}

export default ItemCard;