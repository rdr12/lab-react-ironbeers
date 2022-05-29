import React from "react";
//IMPORTAMOS LAS IMAGENES QUE VAMOS A PONER EN LAS SECCIONES
import ImgBeer from "../assets/beers.png";
import ImgRandomBeer from "../assets/random-beer.png";
import ImgNewBeer from "../assets/new-beer.png";
//IMPORTAMOS LINK PARA NUESTROS LINKS
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/beers" style={{ textDecoration: "none" }}>
        <img src={ImgBeer} alt="beers" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, sonsecteur adipscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </Link>

      <Link to="/random" style={{ textDecoration: "none" }}>
        <img src={ImgRandomBeer} alt="random" />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit arnet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </Link>

      <Link to="/new" style={{ textDecoration: "none" }}>
        <img src={ImgNewBeer} alt="new" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipsicing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </Link>
    </div>
  );
}

export default Home;
