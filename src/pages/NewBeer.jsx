import React from "react";
import ImgCabecera from "../assets/encabezado.png";
import { Link } from "react-router-dom";

//AÑADO IMG DE CABECERA CON ENLACE A HOME/ IMPORTO IMG Y LINK
function NewBeer() {
  return (
    <div>
      <Link to="/">
        <img src={ImgCabecera} alt="encabezado" />
      </Link>
    </div>
  );
}

export default NewBeer;
