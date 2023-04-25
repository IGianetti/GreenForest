import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import "./CartShop.css";
import { Button } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Link } from "react-router-dom";

const CartShop = () => {
  const { cart, totalPurchase, clearCart } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p> El carrito esta vacio </p>
          <RemoveShoppingCartIcon color="error" sx={{ fontSize: 300 }} />
          <Link to="/">
            <Button sx={{ color: "green", marginTop: "25px" }}>
              Volver al Inicio
            </Button>
          </Link>
        </div>
      ) : (
        <div className="cart-full">
          <div style={{ marginBottom: 15 }}>
            <h2 style={{ marginBottom: 5 }}>
              Total a pagar: $ {totalPurchase()}{" "}
            </h2>

            <Button
              sx={{ marginRight: "5px" }}
              variant="outlined"
              color="error"
              onClick={() => {
                clearCart();
              }}
            >
              Limpiar Carrito
            </Button>
            <Link to="/checkout">
              <Button variant="outlined" color="success">
                Finalizar Compra
              </Button>
            </Link>
          </div>
          <hr />
          <div className="view-cards">
            {cart.map((products) => (
              <div className="container-cart" key={products.id}>
                <div className="details-cart">
                  <div className="big-img">
                    <img
                      style={{ width: "200px", height: "200px" }}
                      src={`${products.img}`}
                      alt="img product"
                    />
                  </div>
                  <div className="box-cart">
                    <div className="row-cart">
                      <h2>{products.nombre}</h2>
                    </div>
                    <p className="price">${products.precio}</p>
                    <p>Cantidad: {products.qantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CartShop;
