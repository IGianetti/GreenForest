import React from 'react'
import './services.css'
import { Card, CardContent,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Services = () => {

  const servicios = [{id:1, name:'Alquiler de Carpa', price: 500}, {id:2, name:'Servicio de Camping', price: 400}, 
                      {id:3, name:'Traslados', price: 600},{id:4, name:'Servicios de Guia', price: 700}]

  let { id } = useParams();

  return (
    <div className='services'>
      <h1>Nuestros Servicios</h1>
      {servicios.map((servicio, index)=>{
        return (
          <div key={index}>
            <Link to={`/category/services/${servicio.id}`}>
               <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {servicio.name}
                    </Typography>   
                    <Typography gutterBottom variant="h5" component="div">
                      ${servicio.price}
                    </Typography>                           
                </CardContent>
               </Card>
            </Link>
          </div>
        )
      })}
    
    </div>
  )
}

export default Services