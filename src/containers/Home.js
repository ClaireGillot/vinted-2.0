import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Veuillez patienter, la page est en cours de chargement...</p>
  ) : (
    <div>
      <div className="hero">
        <Hero />
      </div>
      <div className="container">
        <div className="carroussel">
          {data.offers.map((offer, index) => {
            return (
              <Link to={`/offer/${offer._id}`}>
                <div key={offer._id}>
                  <div className="itemImg">
                    <img
                      src={offer.product_image.secure_url}
                      alt={offer.name}
                    />

                    <h3>{offer.product_details[0].MARQUE}</h3>
                    <p>{offer.product_details[1].TAILLE}</p>
                    <p>{offer.product_price} €</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
