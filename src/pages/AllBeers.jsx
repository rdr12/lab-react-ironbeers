// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";


function AllBeers() {
  {
    /* 1. Creamos el estado para guardar la info */
  }
  const [listBeers, setListBeers] = useState(null);

  {
    /* 2. Acceder al componentDidMount que a buscar en la API*/
  }
  useEffect(() => {
    getlistBeers();
  }, []);

  {
    /* 3. Crear funcion que será la invocación en componentDidMoun con Api */
  }
  const getlistBeers = async () => {
    //BUSCAMOS LA DATA Y LA GUARDAMOS AL ESTADO
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      setListBeers(response.data);
    } catch (error) {}
  };

  {
    /* 4. Loading  */
  }
  if (listBeers === null) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      
      <Navbar />
     

      {/* LISTA DE CERVEZAS */}

       {
    //LECCIONO QUE DATA QUIERO QUE APAREZCA EN LA LISTA DE CERVEZAS        
        listBeers.map((eachBeer) => {
        return (
        <div key={eachBeer}>
        <img src={eachBeer.image_url} alt="eachBeer" width="50px"/>
        <Link to = {`/beer/${eachBeer._id}`}>
        <h1>{eachBeer.name}</h1>
        </Link>
        <p>{eachBeer.tagline}</p>
        <p>{eachBeer.contributed_by}</p>
        </div>
        
        )

      })}
      
    </div>
  );
}

export default AllBeers;
