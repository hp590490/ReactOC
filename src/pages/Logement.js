import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Star from "../assets/img/star.png";
import EmptyStar from "../assets/img/emptystar.png";
import { useParams } from "react-router-dom";
import data from "../assets/logements.json";

const Logement = () => {
  const { id } = useParams(); // pour trouver dans l'URL l'id correspondant à la carte cliquée par le visiteur
  const [activeIndex, setActiveIndex] = useState(0);
  const [logement, setLogement] = useState(null);
  const maxRating = 5;
  useEffect(() => {
    const logementData = data.find((log) => log.id === id); // on va donner à logementData le logement correspondant à l'id de l'URL déclaré en haut, une fois cela récupéré on pourra faire découler toutes ces données
    setLogement(logementData);
  }, [id]);

  const changeSlide = (direction) => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = logement.pictures.length - 1;
      if (newIndex >= logement.pictures.length) newIndex = 0;
      return newIndex;
    });
  };
  if (!logement) {
    return <p>Erreur, chargement...</p>;
  }
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="caroussel">
          {logement.pictures.length > 1 && (
            <>
              <button className="btn" onClick={() => changeSlide(-1)} id="prev">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="btn" onClick={() => changeSlide(1)} id="next">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </>
          )}
          <ul>
            {logement.pictures.map((slide, index) => (
              <li
                key={index}
                className={`slide ${index === activeIndex ? "active" : ""}`}
              >
                <img src={slide} alt={`Caroussel ${index + 1}`} />
              </li>
            ))}
          </ul>
          <p>
            {activeIndex + 1}/{logement.pictures.length}
          </p>
        </div>

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
              <input type="checkbox" id="collapsible-head-1" />
              <label htmlFor="collapsible-head-1">Description</label>
              <div className="collapsible-text-card">
                <p>{logement.description}</p>
              </div>
            </div>
          </div>
          <div className="collapsible-card">
            <div className="collapsible-item-card">
              <input type="checkbox" id="collapsible-head-2" />
              <label htmlFor="collapsible-head-2">Equipements</label>
              <div className="collapsible-text-card">
                {logement.equipments.map((equipment, index) => (
                  <p key={index}>{equipment}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
