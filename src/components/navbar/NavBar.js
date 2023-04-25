import React from "react";
import { AppBar, Toolbar, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CartWidget from "../cartwidget/CartWidget";
import "./NavBar.css";
import CategoriesMenu from "../categoriesMenu/CategoriesMenu";

const NavBar = () => {
    return (
        <AppBar
            position="static"
            className="NavigationBar"
            sx={{ backgroundColor: "#000" }}
        >
            <Container maxWidth="x1">
                <Toolbar disableGutters className="navbarContainer">
                    <Button className="link" component={Link} to="/">
                        {" "}
                        Productos
                    </Button>
                    <CategoriesMenu />
                    <Button className="link" component={Link} to="/about">
                        {" "}
                        Nosotros
                    </Button>
                    <Button className="link" component={Link} to="/cartshop">
                        {" "}
                        <CartWidget />
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
