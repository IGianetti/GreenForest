/****** REACT ******/
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

/****** CONTEXT ******/
import { CartContext } from "../../context/CartContext";

/****** FIREBASE ******/
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

/****** MUI ******/
import { Button, TextField } from "@mui/material";

/****** CSS ******/
import "./checkout.css";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  email2: "",
  ciudad: "",
};

const Checkout = () => {
  const { cart, totalPurchase, clearCart } = useContext(CartContext);
  const [values, setValues] = useState(initialState);
  const [equals, setEquals] = useState(false);
  const [orderId, setOrderId] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    validateMail();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer: values,
      items: cart,
      total: totalPurchase(),
      date: Timestamp.fromDate(new Date()),
    };

    const docRef = await addDoc(collection(db, "purchases"), {
      order,
    });

    setOrderId(docRef.id);
    setValues(initialState);
    clearCart();
  };

  const validateMail = () => {
    if (values.email && values.email2 !== "") {
      if (values.email === values.email2) {
        setEquals(true);
      } else {
        setEquals(false);
      }
    }
  };

  return (
    <>
      {!orderId ? (
        <div className="form-checkout" onSubmit={onSubmit}>
          <form className="formContainer">
            <h1>Confirme su compra</h1>
            <TextField
              id="name"
              label="Nombre"
              type="text"
              variant="outlined"
              placeholder="Nombre"
              required
              style={{ margin: 10, width: 400 }}
              name="name"
              value={values.name}
              onChange={onChange}
            />
            <TextField
              id="lastName"
              label="Apellio"
              type="text"
              variant="outlined"
              placeholder="Apellio"
              required
              style={{ margin: 10, width: 400 }}
              name="lastName"
              value={values.lastName}
              onChange={onChange}
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Email"
              required
              style={{ margin: 10, width: 400 }}
              name="email"
              value={values.email}
              onChange={onChange}
            />
            <TextField
              id="email2"
              label="Repetir email"
              type="email"
              variant="outlined"
              placeholder="Repetir Email"
              style={{ margin: 10, width: 400 }}
              name="email2"
              value={values.email2}
              onChange={onChange}
            />
            <TextField
              id="city"
              label="Ciudad"
              type="text"
              variant="outlined"
              placeholder="Ciudad"
              required
              style={{ margin: 10, width: 400 }}
              name="ciudad"
              value={values.ciudad}
              onChange={onChange}
            />
            <>
              {equals ? (
                <Button variant="contained" color="success" type="submit">
                  Finalizar compra
                </Button>
              ) : (
                <p>Valida Email</p>
              )}
            </>
          </form>
        </div>
      ) : (
        <div className="buy-success">
          <h2>Compra registrada con éxito !</h2>
          <hr></hr>
          <p className="p-order">
            Tu número de orden es:{" "}
            <span className="span-order">{orderId} </span>
          </p>
          <Button component={Link} to="/" variant="outlined" color="warning">
            Ir al inicio
          </Button>
        </div>
      )}
    </>
  );
};

export default Checkout;
