import React from "react";
import {AppBar, Toolbar, Container} from "@mui/material"
import { Link } from "react-router-dom";
import CartWidget from "../cartwidget/CartWidget";
import "./NavBar.css"
import CategoriesMenu from "../categoriesMenu/CategoriesMenu";



const NavBar = () => {
  
    
  return (
    <AppBar position="static" className="NavigationBar" sx={{backgroundColor: '#000'}}>
        <Container maxWidth='x1'>
            <Toolbar disableGutters className="navbarContainer">
                <Link className="link" to='/'> 
                    Productos 
                </Link>
                <CategoriesMenu />                
                <Link className="link" to='/contact'>
                    Contacto
                </Link>
                <Link className="link" to='/cartshop'>
                    <CartWidget/>
                </Link>    
            </Toolbar>
        </Container>
    </AppBar>
  );
};

export default NavBar;
