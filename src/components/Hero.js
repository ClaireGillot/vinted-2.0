import "../App.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="heroBloc">
          <h2>Prêts à faire du tri dans vos placard ?</h2>
          <Link to={`/publish`}>
            <button className="buttonHero">Commencer à vendre</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
