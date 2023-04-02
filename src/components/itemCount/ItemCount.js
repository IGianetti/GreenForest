import React, {useState} from 'react'
import './itemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    

    const decrease = () =>{
        setCount(count - 1)
    }

    const increase = () =>{
        setCount(count + 1)
    }


  return (
    <div className='counter'>
        <button className='btn-count' disabled={count <= 1} onClick={decrease}>-</button>
        <span className='span-count'>{count}</span>
        <button className='btn-count' disabled={count >= stock} onClick={increase}>+</button>
        <button className='cart' disabled={stock <= 0} onClick={()=> onAdd(count)}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCount