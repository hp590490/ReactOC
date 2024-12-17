import React, { useState } from "react";
import PropTypes from "prop-types";

const Caroussel = ({ pictures }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlide = (direction) => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = pictures.length - 1;
      if (newIndex >= pictures.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <div className="caroussel">
      {pictures.length > 1 && (
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
        {pictures.map((slide, index) => (
          <li
            key={index}
            className={`slide ${index === activeIndex ? "active" : ""}`}
          >
            <img src={slide} alt={`Caroussel ${index + 1}`} />
          </li>
        ))}
      </ul>
      <p>
        {activeIndex + 1}/{pictures.length}
      </p>
    </div>
  );
};

Caroussel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Caroussel;
