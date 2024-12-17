import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Card = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // pour gérer les erreurs de récupération

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch("/logements.json");
        const logements = await response.json();
        setData(logements);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchLogements();
  }, []);
  if (error) {
    return error;
  }
  return (
    <div className="cards">
      {data.map((logement) => (
        <NavLink to={`/logement/${logement.id}`} key={logement.id}>
          <div className="card-container" key={logement.id}>
            <img src={logement.cover} alt={`logement ${logement.id}`} />
            <h3>{logement.title}</h3>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Card;
