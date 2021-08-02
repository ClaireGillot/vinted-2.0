import "../App.css";

import React from "react";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  return (
    <div className="header">
      <div className="container">
        <Link to={"/home"}>
          <img className="logo" alt="logo" src={logo} />
        </Link>
        <div className="searchIcon">
          <FontAwesomeIcon icon="search" />
        </div>
        <div className="research">
          <input type="text" placeholder="Recherche des articles..."></input>
        </div>

        {userToken ? (
          <>
            <button className="buttonDeconnect" onClick={() => setUser(null)}>
              Se déconnecter
            </button>
            <Link to={`/publish`} className="buttonPublish">
              Vends tes articles
            </Link>
          </>
        ) : (
          <>
            <Link to={`/signup`} className="buttonSignUp">
              S'inscrire
            </Link>
            <Link to={`/login`} className="buttonLogin">
              Se connecter
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
