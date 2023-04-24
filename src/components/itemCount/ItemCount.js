import React from 'react'
import './itemCount.css'

const ItemCount = ({qantity, modQantity, stock, onAdd}) => {
    
    
    const increase = () =>{
      modQantity(qantity + 1)
    }

    const decrease = () =>{
      modQantity(qantity - 1)
    }  


  return (
    <div className='counter'>
        <button className='btn-count' disabled={qantity <= 1} onClick={decrease}>-</button>
        <span className='span-count'>{qantity}</span>
        <button className='btn-count' disabled={qantity >= stock} onClick={increase}>+</button>
        <button className='cart' disabled={stock <= 0} onClick={()=> onAdd(qantity)}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCount