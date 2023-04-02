import { Grid, IconButton } from '@mui/material'
import React from 'react'
import logo from '../../assets/Greenforest-Logo.png'
import './Footer.css'

const Footer = () => {
  return (

   

    <Grid className="footer" sx={{ placeItems: "center" }} container>
                <Grid className="footer__content__logo" item xs={3}>
                    <IconButton>
                    <img className="logoFooter" src={logo} alt="logo"/>
                    </IconButton>                    
                </Grid>

                
                <Grid item xs={4}>
                         <ul>
                            <ol>Inicio</ol>
                            <ol>Productos</ol>
                            <ol>Servicios</ol>
                            <ol>Contacto</ol>
                        </ul>         
                </Grid>
                <Grid item xs={4}>
                         <ul>
                            <ol>Inicio</ol>
                            <ol>Productos</ol>
                            <ol>Servicios</ol>
                            <ol>Contacto</ol>
                        </ul>         
                </Grid>
    </Grid>            


    /*<div className="footer" >
            <div className="footer__content__container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="logo" />                        
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <ul>
                            <ol>Inicio</ol>
                            <ol>Productos</ol>
                            <ol>Servicios</ol>
                            <ol>Contacto</ol>
                        </ul>                        
                    </div>
                    <div className="footer__content__menu">
                    <ul>
                            <ol>Inicio</ol>
                            <ol>Productos</ol>
                            <ol>Servicios</ol>
                            <ol>Contacto</ol>
                        </ul>        
                    </div>
                    
                </div>
            </div>
        </div>*/
  )
}

export default Footer