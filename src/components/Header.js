import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/LOGO.jpg";

const Header = () => {
  return (
    <header>
      <div className="navigation">
        <div className="navigation-left">
          <img src={Logo} alt="Logo KASA" />
        </div>
        <nav className="navigation-right">
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Accueil</li>
            </NavLink>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>À propos</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
