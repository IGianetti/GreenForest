import React from "react";
import "./HeaderLogo.css";

import { Link } from "react-router-dom";

import imgLogo from "../../assets/Greenforest-Logo.png";
import { Button } from "@mui/material";

const HeaderLogo = () => {
  return (
    <div className="header-container-logo">
      <Button component={Link} to="/">
        <img className="logo" src={imgLogo} alt="GreenForestLogo" width="150" />
      </Button>
    </div>
  );
};

export default HeaderLogo;
