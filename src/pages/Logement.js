import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Annonceur from "../assets/img/Portrait-professionnel-3.jpg";
import Star from "../assets/img/star.png";
import Caroussel1 from "../assets/img/caroussel.png";
import Caroussel2 from "../assets/img/bg-header.jpg";
import Caroussel3 from "../assets/img/bg-about.jpg";

const Logement = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [Caroussel1, Caroussel2, Caroussel3];

  const changeSlide = (direction) => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = slides.length - 1;
      if (newIndex >= slides.length) newIndex = 0;

      return newIndex;
    });
  };
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="caroussel">
          {slides.length > 1 && (
            <>
              <button className="btn" onClick={() => changeSlide(-1)} id="prev">
                <i class="fa-solid fa-angle-left"></i>
              </button>
              <button className="btn" onClick={() => changeSlide(1)} id="next">
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </>
          )}
          <ul>
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`slide ${index === activeIndex ? "active" : ""}`}
              >
                <img src={slide} alt={`Caroussel ${index + 1}`} />
              </li>
            ))}
          </ul>
          <p>
            {activeIndex + 1}/{slides.length}
          </p>
        </div>
        <div className="title-card">
          <div className="title-card-left">
            <h2>Cozt loft on the Canal Saint-Martin</h2>
            <p>Paris, Île-de-France</p>
          </div>
          <div className="title-card-right">
            <span>
              Alexandre <br />
              Dumas
            </span>
            <img src={Annonceur} alt="portrait annonceur" />
          </div>
        </div>

        <div className="tag-card">
          <div className="tag-card-left">
            {" "}
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>
          <div className="tag-card-right">
            <img src={Star} alt="raiting" />
            <img src={Star} alt="raiting" />
            <img src={Star} alt="raiting" />
            <img src={Star} alt="raiting" />
            <img src={Star} alt="raiting" />
          </div>
        </div>
        <div className="wrapper-card">
          <div className="collapsible-card">
            <div className="collapsible-item-card">
              <input type="checkbox" id="collapsible-head-1" />
              <label htmlFor="collapsible-head-1">Description</label>
              <div className="collapsible-text-card">
                <p>Test1111</p>
              </div>
            </div>
          </div>
          <div className="collapsible-card">
            <div className="collapsible-item-card">
              <input type="checkbox" id="collapsible-head-2" />
              <label htmlFor="collapsible-head-2">Equipements</label>
              <div className="collapsible-text-card">
                <p>Test2222</p>
                <p>Test2222</p>
                <p>Test2222</p>
                <p>Test2222</p>
                <p>Test2222</p>
                <p>Test2222</p>
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
