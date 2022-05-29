import React from 'react';
import ImgCabecera from "../assets/encabezado.png";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
         <Link to="/">
                <img src={ImgCabecera} alt="encabezado" />
         </Link>
    </div>
  )
}

export default Navbar