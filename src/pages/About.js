import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

import { Helmet } from "react-helmet-async";

const About = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // pour gérer les erreurs de récupération

  useEffect(() => {
    const fetchAbouts = async () => {
      try {
        const response = await fetch("/about.json");
        const about = await response.json();
        setData(about);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAbouts();
  }, []);
  if (error) {
    return error;
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>A propos</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <div className="img-about">
        <div className="overlay-about"></div>
      </div>
      <div className="wrapper">
        <div className="collapsible">
          {data.map((about, index) => (
            <Collapse key={index} title={about.title} content={about.content} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
