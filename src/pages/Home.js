import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="txt-header">
        <div className="overlay"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="section-cards">
        <NavLink to="/logement">
          <Card />
        </NavLink>
        <NavLink to="/logement">
          <Card />
        </NavLink>{" "}
        <NavLink to="/logement">
          <Card />
        </NavLink>{" "}
        <NavLink to="/logement">
          <Card />
        </NavLink>{" "}
        <NavLink to="/logement">
          <Card />
        </NavLink>{" "}
        <NavLink to="/logement">
          <Card />
        </NavLink>{" "}
        <NavLink to="/logement">
          <Card />
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
