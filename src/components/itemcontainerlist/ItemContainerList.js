import React, { useState, useEffect } from 'react'
import "./ItemContainerList.css"
import { Link } from 'react-router-dom'
import CardProduct from '../cardproduct/CardProduct'
import axios from 'axios'


const ItemContainerList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users')
    .then(res =>setUsers(res.data))
  },[])
  
  return (
    <div  className='itemContainer' >
     
      {users.map((user)=>{
        return(
          <div key={user.id}>
          <Link to={`/item-details/${user.login}`}>
          <CardProduct  data={user}/>
          </Link>
          </div>
        )
      })}
     
    </div>
  )
}

export default ItemContainerList