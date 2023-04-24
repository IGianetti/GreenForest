import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const totalProducts = () => { 
      
        return cart.length+1 
    }

    const totalPurchase = () =>{
        
        return cart.reduce ((counter, product)=> counter + product.price * product.quantity, 0)
    }

    const addItem = (item) => {
        //console.log('Estoy en Additem', item)
        
        setCart([...cart, item]);
        console.log('Estoy en Additem', cart)
    }

    const removeItem = (itemId) => {        
        setCart(cart.filter(post => post.id !== itemId));
    }

    const clearCart = () => {        
        setCart([]);
    }

    const isInCart = (itemid) => { 
        console.log('Eso ya esta en el carrito peach')       
        return cart.some(post => post.id === itemid)
    }


    console.log('Carrito',cart);
    console.log('Largo del Carrito', cart.length);

    return(
        <CartContext.Provider value = {{
            cart,
            addItem,
            removeItem,
            isInCart,
            clearCart,
            totalPurchase,
            totalProducts,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;