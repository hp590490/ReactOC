import React from "react";
import Logo from "../assets/img/LOGO-footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          {" "}
          <img src={Logo} alt="Logo KASA footer" />
        </div>
        <div className="footer-text">
          {" "}
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
