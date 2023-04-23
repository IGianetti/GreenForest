
import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import './item.css'


const Item = ({ itemData }) => {

    const onAdd = (quantity) =>{
        console.log(`Compraste  ${quantity} unidades`)
    }

  return (
  <div className='container'>
    <div className='details'>
        <div className='big-img'>
            <img src={`${itemData.img}`} alt='img product'/>
        </div>

        <div className='box'>
            <div className='row'>
                <h2>{itemData.nombre}</h2>                             
            </div>
            <p>Precio: ${itemData.precio}</p>
            <p>Descripcion: {itemData.descp}</p>
            <p>Categoria: {itemData.cat}</p>
            <ItemCount initial= {1} stock={itemData.stock} onAdd={onAdd}/>            
        </div>        
    </div>
  </div>    
  )
}

export default Item