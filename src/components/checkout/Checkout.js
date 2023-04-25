import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Button, TextField } from '@mui/material';

import './checkout.css'


const initialState = {
    name: "",
    lastName: "",
    email: "",
};

const Checkout = () => {

    const { cart, totalPurchase, clearCart } = useContext(CartContext);
    const [values, setValues] = useState(initialState);
    const [orderId, setOrderId] = useState(null);

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };


    //<form className="FormContainer" onSubmit={onSubmit}>
    return (
        <div className='form-checkout' >

            <form className="formContainer" >
                <h1>Confirme su compra</h1>
                <TextField
                    id='name'
                    label='Nombre'
                    type='text'
                    variant='outlined'
                    placeholder="Nombre"
                    style={{ margin: 10, width: 400 }}
                    name="name"
                    value={values.name}
                    onChange={onChange}
                />
                <TextField
                    id='lastName'
                    label='Apellio'
                    type='text'
                    variant='outlined'
                    placeholder="Apellio"
                    style={{ margin: 10, width: 400 }}
                    name="lastName"
                    value={values.lastName}
                    onChange={onChange}
                />
                <TextField
                    id='email'
                    label='Email'
                    type='email'
                    variant='outlined'
                    placeholder="Email"
                    style={{ margin: 10, width: 400 }}
                    name="email"
                    value={values.email}
                    onChange={onChange}
                />
                <TextField
                    id='email2'
                    label='Repetir email'
                    type='email'
                    variant='outlined'
                    placeholder="Repetir Email"
                    style={{ margin: 10, width: 400 }}
                    name="email2"
                    value={values.email2}
                    onChange={onChange}
                />
                {values.email == values.email2 ? <Button variant="contained" color="success" type="submit">
                    Success
                </Button> : <p>Valida el mail para seguir</p>}

            </form>
        </div>
    )
}

export default Checkout