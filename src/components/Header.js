import "../App.css";
import React from "react";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img alt="logo" src={logo} />
        <div className="searchBar">
          <input placeholder="Recherche des articles"></input>
        </div>
        <button className="buttonOne">S'inscrire</button>
        <button className="buttonTwo">Se connecter</button>
        <button className="buttonThree">Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
