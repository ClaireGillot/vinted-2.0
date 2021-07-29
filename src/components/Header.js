import "../App.css";
import React from "react";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img alt="logo" src={logo} />
        <div className="searchBar">
          <FontAwesomeIcon icon="search" />
          <input type="text" placeholder="Recherche des articles"></input>
        </div>
        <Link to={`/signup`} className="buttonOne">
          S'inscrire
        </Link>
        <Link to={`/login`} className="buttonTwo">
          Se connecter
        </Link>
        <button className="buttonThree">Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
