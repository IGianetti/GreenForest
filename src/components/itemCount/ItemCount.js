import React from "react";
import "./itemCount.css";
import { Button } from "@mui/material";

const ItemCount = ({ qantity, modQantity, stock, onAdd }) => {
  const increase = () => {
    modQantity(qantity + 1);
  };

  const decrease = () => {
    modQantity(qantity - 1);
  };

  return (
    <div className="counter">
      <button className="btn-count" disabled={qantity <= 1} onClick={decrease}>
        -
      </button>
      <span className="span-count">{qantity}</span>
      <button
        className="btn-count"
        disabled={qantity >= stock}
        onClick={increase}
      >
        +
      </button>
      <Button
        className="cart"
        disabled={stock <= 0}
        onClick={() => onAdd(qantity)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
