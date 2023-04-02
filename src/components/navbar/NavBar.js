import React from "react";
import {AppBar, Grid, Tab, Tabs, Toolbar, IconButton} from "@mui/material"
import { Link } from "react-router-dom";
import CartWidget from "../cartwidget/CartWidget";
import LoginButton from "../loginbutton/LoginButton";
import logo from "../../assets/Greenforest-Logo.png"
import "./NavBar.css"



const NavBar = () => {
  
    
  return (
    <AppBar sx={{marginBottom: "500px",backgroundImage:"linear-gradient(90deg, rgba(4,70,32,1) 0%, rgba(71,95,52,1) 37%, rgba(131,133,97,1) 66%, rgba(184,174,152,1) 90%);"}}>
        <Toolbar>
            <Grid sx={{ placeItems: "center" }} container>
                <Grid item xs={2}>
                    <IconButton component={Link} to="/">
                    <img className="logoNavBar" src={logo} alt="logo"/>
                    </IconButton>
                    
                </Grid>

                <Grid item xs={1}/>

                <Grid display="flex" item xs={6}>
                    <Tabs>
                        <Link className="link" to='/'><Tab value='0' label='Inicio' sx={{ marginLeft: 1, marginRight: 1  }}>0</Tab></Link>
                        <Link className="link" to='/category/services'><Tab value='1' label='Servicios' sx={{ marginLeft: 1, marginRight: 1  }}>1</Tab></Link>
                        <Link className="link" to='/contact'><Tab value='2' label='Contacto' sx={{ marginLeft: 1, marginRight: 1  }}>2</Tab></Link>
                     </Tabs>
                </Grid>

                <Grid display="flex" item xs={1}>               
                    <Link className="link" to='/cartshop'><CartWidget/></Link>            
                </Grid>

                <Grid display="flex" item xs={2}>               
                    <LoginButton/>                    
                </Grid>
            </Grid>
            
        </Toolbar>
    </AppBar>
  );
};

export default NavBar;
