import React from "react";
import "./errorPage.css";
import { Button } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <WarningAmberIcon sx={{ fontSize: 400, color: "red" }} />
      <h1> La ruta especificada es invalida </h1>
      <Button
        component={Link}
        to="/"
        sx={{ color: "green", marginTop: "25px" }}
      >
        Volver al Inicio
      </Button>
    </div>
  );
};

export default ErrorPage;
