import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function RandomBeer() {
  const [beerRan, setBeerRan] = useState(null);
  const [buscando, setBuscando] = useState(true);

  const getBeerRam = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(response.data);
      setBeerRan(response.data);
      setBuscando(false);
    } catch (error) {
      // navigate("/error");
    }
  };

  useEffect(() => {
    getBeerRam();
  }, []);

  //4. Loading
  if (buscando === null) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <Navbar />

      {beerRan && (
        <div>
          <img src={beerRan.image_url} alt="berrRan" width={"250px"} />
          <h2>{beerRan.name}</h2>
          <p>{beerRan.tagline}</p>
          <p>{beerRan.first_brewed}</p>
          <p>{beerRan.attenuation_level}</p>
          <p>{beerRan.description}</p>
          <p>{beerRan.contributed_by}</p>
        </div>
      )}

      <Link to="/beers">
        <button>Back to beers</button>
      </Link>
    </div>
  );
}

export default RandomBeer;
