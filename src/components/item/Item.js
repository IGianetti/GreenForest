import { Button } from '@mui/material'
import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import './item.css'


const Item = ({ data }) => {

    const onAdd = (quantity) =>{
        console.log(`Compraste  ${quantity} unidades`)
    }

  return (
  <div className='container'>
    <div className='details'>
        <div className='big-img'>
            <img src={`${data.avatar_url}`} alt='img product'/>
        </div>

        <div className='box'>
            <div className='row'>
                <h2>{data.name}</h2>
                <span>$ 500</span>                
            </div>
            <p>Alias: {data.login}</p>
            <p>Repo: {data.html_url}</p>
            <p>Localidad: {data.location}</p>
            <ItemCount initial= {1} stock={20} onAdd={onAdd}/>            
        </div>        
    </div>
  </div>    
  )
}

export default Item