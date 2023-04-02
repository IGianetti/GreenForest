import React, { useState, useEffect } from 'react'
import './itemDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Item from '../../components/item/Item'

const ItemDetailsContainer = () => {
  const [user, setUser] = useState({});
  console.log(user)

  let { id } = useParams();

  useEffect(() => {
    axios.get(`https://api.github.com/users/${id}`)
    .then(res =>setUser(res.data))
    
  },[id])

  return (
    <div className='item__details'>
    <h1>Detalle del producto</h1>
    <Item data={user}/>
    </div>
  )
}

export default ItemDetailsContainer