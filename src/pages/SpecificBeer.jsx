// import React from "react";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//AÑADO E IMPORTO NAVBAR
function SpecificBeer() {
  //1. Creamos el estado para guardar la info
  const [beerFicha, setBeerFicha] = useState([]);
  const [buscando, setBuscando] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  //2. Crear funcion que será la invocación en componentDidMoun con Api
  const getBeerFicha = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beer/${id}`
      );
      console.log(response.data);
      setBeerFicha(response.data);
      setBuscando(false);
    } catch (error) {
      // 3.a. Redirigimos a la página de error
      navigate("/error");
    }
  };

  //3. Acceder al componentDidMount que a buscar en la API
  useEffect(() => {
    getBeerFicha();
  }, []);

  //4. Loading
  if (buscando === null) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <Navbar />

      {beerFicha && (
        <div>
          <img src={beerFicha.image_url} alt="beerFicha" width={"250px"} />
          <h2>{beerFicha.name}</h2>
          <p>{beerFicha.tagline}</p>
          <p>{beerFicha.first_brewed}</p>
          <p>{beerFicha.attenuation_level}</p>
          <p>{beerFicha.description}</p>
          <p>{beerFicha.contributed_by}</p>
        </div>
      )}

      <Link to="/beers">
        <button>Back to beers</button>
      </Link>
    </div>
  );
}

export default SpecificBeer;
