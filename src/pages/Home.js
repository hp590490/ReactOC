import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accueil</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <div className="txt-header">
        <div className="overlay"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="section-cards">
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
