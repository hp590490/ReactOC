import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Caroussel from "../components/Caroussel";
import Star from "../assets/img/star.png";
import EmptyStar from "../assets/img/emptystar.png";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Logement = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(null);
  const maxRating = 5;

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch("/logements.json");
        const logements = await response.json();
        setData(logements);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      }
    };

    fetchLogements();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const logementData = data.find((log) => log.id === String(id));
      setLogement(logementData);
    }
  }, [data, id]);

  if (error) {
    return { error };
  }

  if (!logement) {
    const logementExists = data.some((log) => log.id === String(id));
    if (!logementExists && data.length > 0) {
      return <Navigate to="/error" />;
    }
    return <p>Chargement...</p>;
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Logement</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <div className="main-content">
        <Caroussel pictures={logement.pictures} />
        <div className="title-card">
          <div className="title-card-left">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <div className="title-card-right">
            <span>{logement.host.name}</span>
            <img
              src={logement.host.picture}
              alt={"portrait " + logement.host.name}
            />
          </div>
        </div>
        <div className="tag-card">
          <div className="tag-card-left">
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className="tag-card-right">
            {Array.from({ length: maxRating }, (_, index) => (
              <img
                key={index}
                src={
                  index < Math.round(Number(logement.rating)) ? Star : EmptyStar
                }
                alt={
                  index < Math.round(Number(logement.rating))
                    ? "Étoile pleine"
                    : "Étoile vide"
                }
              />
            ))}
          </div>
        </div>
        <div className="wrapper-card">
          <div className="collapsible-card">
            <div className="collapsible-item-card">
              <Collapse title="Description" content={logement.description} />
            </div>
          </div>
          <div className="collapsible-card">
            <div className="collapsible-item-card">
              <Collapse
                title="Equipements"
                content={
                  <ul>
                    {logement.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
