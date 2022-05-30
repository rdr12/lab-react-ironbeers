import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function NewBeer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setcontributed_by] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirst_brewed = (e) => setFirst_brewed(e.target.value);
  const handleAttenuation_level = (e) => setAttenuation_level(e.target.value);
  const handleContributed_by = (e) => setcontributed_by(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // INFORMACION DE LA NUEVA CERVEZA

      const newBeer = {
        name,
        tagline,
        description,
        first_brewed,
        attenuation_level,
        contributed_by,
      };

      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      navigate("/beers");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <br />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <br />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <br />

        <label htmlFor="first_brewed">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirst_brewed}
        />

        <label htmlFor="attenuation_level">Attenuation_level</label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAttenuation_level}
        />

        <label htmlFor="contributed_by">Contributed_by</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributed_by}
        />

        <button type="submit">Add New Beer</button>
      </form>

      <Link to="/beers">
        <button>Back to Beers</button>
      </Link>
    </div>
  );
}

export default NewBeer;
