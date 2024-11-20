import React from "react";
import data from "../assets/logements.json";
import { NavLink } from "react-router-dom";
const Card = () => {
  return (
    <div className="cards">
      {data.map((logement) => (
        <NavLink to={`/logement/${logement.id}`} key={logement.id}>
          <div className="card-container" key={logement.id}>
            <img src={logement.cover} alt={"logement" + logement.id} />
            <h3>{logement.title}</h3>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Card;
