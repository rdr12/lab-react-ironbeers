// import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import SpecificBeer from "./pages/SpecificBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      {/* IMPORTAMOS EL COMPONENTE QUE SIEMPRE SE VA A VER      */}
      
      {/* <Navbar /> */}

      {/* ESTRUCTURA DE RUTAS SEGUN PLANIFICACION */}
      {/* IMPORTAMOS ROUTES Y HACEMOS NUESTRO SISTEMA DE RUTAS */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beer/:id" element={<SpecificBeer />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
