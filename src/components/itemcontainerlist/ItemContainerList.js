import React from 'react'
import "./ItemContainerList.css"

const ItemContainerList = ({text}) => {
  return (
    <div className='itemContainer'>
      <p>{text}</p>
    </div>
  )
}

export default ItemContainerList