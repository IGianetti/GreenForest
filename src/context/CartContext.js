import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const totalPurchase = () => {
        const res = cart.reduce((cont, item) => {
            return cont + item.precio * item.qantity;
        }, 0);
        return res;
    };

    const addItem = (item) => {
        setCart([...cart, item]);
    };

    const removeItem = (itemId) => {
        setCart(cart.filter((post) => post.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemid) => {
        return cart.some((post) => post.id === itemid);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                isInCart,
                clearCart,
                totalPurchase,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
