
import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/ItemCount'
import './item.css'


const Item = ({ itemData }) => {

    const [qty, setQty] = useState(1);

    const { addItem, isInCart } = useContext(CartContext);

    const handleAddCart = () => {
        if (isInCart(itemData.id)) {
            alert("Producto ya agregado al carrito");
        } else {          
            const newProduct = { ...itemData, qantity: qty };
            addItem(newProduct);
            }
      };

  return (
  <div className='container'>
    <div className='details'>
        <div className='big-img'>
            <img src={`${itemData.img}`} alt='img product' />
        </div>

        <div className='box'>
            <div className='row'>
                <h2>{itemData.nombre}</h2>
                                           
            </div>
            <p>Precio: ${itemData.precio}</p>
            <p>Descripcion: {itemData.descp}</p>
            <p>Categoria: {itemData.cat}</p>
            <ItemCount qantity={qty} modQantity={setQty} stock={itemData.stock} onAdd={handleAddCart}/>            
        </div>        
    </div>
  </div>    
  )
}

export default Item