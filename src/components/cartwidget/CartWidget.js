/****** REACT ******/
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

/****** MATERIAL UI ******/
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <IconButton size="large" aria-label="show n new items" color="inherit">
      <div style={{ display: "flex" }}>
        <ShoppingCartCheckoutIcon />
        <Badge
          style={{ visibility: cart.length === 0 ? "hidden" : "visible" }}
          badgeContent={cart.length}
          color="error"
        />
      </div>
    </IconButton>
  );
};

export default CartWidget;
