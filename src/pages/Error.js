import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Header />
      <div className="txt-error">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas</p>

        <NavLink to="/">
          <ul>
            <li>Retourner sur la page d'accueil</li>
          </ul>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
