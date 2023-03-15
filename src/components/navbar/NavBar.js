import React, { useState } from "react";
import {AppBar, Grid, Tab, Tabs, Toolbar, Typography} from "@mui/material"
import CartWidget from "../cartwidget/CartWidget";


const NavBar = ({links}) => {

    const [value, setValue] = useState();
  return (
    <AppBar sx={{backgroundImage:"linear-gradient(90deg, rgba(4,70,32,1) 0%, rgba(71,95,52,1) 37%, rgba(131,133,97,1) 66%, rgba(184,174,152,1) 90%);"}}>
        <Toolbar>
            <Grid sx={{ placeItems: "center" }} container>
                <Grid item xs={3}>
                    <Typography fontSize={30}>
                        GREEN FOREST
                    </Typography>
                </Grid>

                <Grid item xs={2}/>

                <Grid display="flex" item xs={5}>
                    <Tabs 
                        
                        TabIndicatorProps={{ style: {backgroundColor: "#D97D54" }}} 
                        textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
                        {links.map((link, index)=>(
                            <Tab key={index} label={link}/>
                        ))}
                    </Tabs>
                </Grid>

                <Grid display="flex" item xs={2}>               
                    <CartWidget/>             
                </Grid>
            </Grid>
            
        </Toolbar>
    </AppBar>
  );
};

export default NavBar;
