import React from "react";
import Technology from "./Advertising/Technology";
import Apparel from "./Advertising/Apparel";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <div className="hero-background">
        <div className="hero-background-1"></div>
        <div className="hero-background-2"></div>
        <div className="hero-background-3"></div>
      </div>
      <div className="introduction-hero">
        <h1>Shoplift NZ</h1>
        <button className="btn-browse">Browse</button>
        <button className="btn-clearance">Clearance</button>
      </div>

      <div className="ads">
        <Technology />
        <Apparel />
      </div>
      <h2 className="header-2">Buy less. Save more.</h2>
      <h3 className="header-3">Have a membership? Save even more.</h3>
      <button className="btn-register">Register</button>

      <Footer />
    </div>
  );
};
//hello

export default Home;
