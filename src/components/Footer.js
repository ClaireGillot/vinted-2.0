import "../App.css";
import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div>
          <span>Made with </span>
          <a target="blank" href="https://fr.reactjs.org/">
            React
          </a>
          <span> at </span>
          <a target="blank" href="https://www.lereacteur.io/">
            Le Reacteur
          </a>
          <span> by </span>
          <a target="blank" href="https://github.com/ClaireGillot">
            Claire
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
