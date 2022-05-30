// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

function AllBeers() {
  // 0. Configurar acceso de navegación, redirecciona al usuario a cualquier lugar
  const navigate = useNavigate();

  /* 1. Creamos el estado para guardar la info */

  const [listBeers, setListBeers] = useState([]);

  /* 2. Crear funcion que será la invocación en componentDidMoun con Api */

  const getlistBeers = async () => {
    //BUSCAMOS LA DATA Y LA GUARDAMOS AL ESTADO
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setListBeers(response.data);
    } catch (error) {
      // 3.a. Redirigimos a la página de error
      navigate("/error");
    }
  };

  /* 3. Acceder al componentDidMount que a buscar en la API*/

  useEffect(() => {
    getlistBeers();
  }, []);

  /* 4. Loading  */

  if (listBeers === null) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <Navbar />

      {/* LISTA DE CERVEZAS */}

      {
        //SELECCIONO QUE DATA QUIERO QUE APAREZCA EN LA LISTA DE CERVEZAS
        listBeers.map((eachBeer) => {
          return (
            <div key={eachBeer._id}>
              <img src={eachBeer.image_url} alt="eachBeer" width="50px" />
              <Link to={`/beer/${eachBeer._id}`}>
                <h1>{eachBeer.name}</h1>
              </Link>
              <p>{eachBeer.tagline}</p>
              <p>{eachBeer.contributed_by}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default AllBeers;
