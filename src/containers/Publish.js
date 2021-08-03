import "../App.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();
  const [data, setData] = useState();
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setData(response.data.result);
      history.push("/home");
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="publish">
        <h3>Vends ton article</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="picture"
              type="file"
              onChange={(event) => setPicture(event.target.files[0])}
            />
          </div>
          <div>
            <h5>Titre</h5>
            <input
              type="text"
              placeholder="ex:Chaussure de marche"
              onChange={(event) => setTitle(event.target.value)}
            />
            <h5>Décris ton article</h5>
            <input
              type="text"
              placeholder="ex:jamais portées, lacets en plus"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div>
            <h5>Marque</h5>
            <input
              type="text"
              placeholder="ex:Nike"
              onChange={(event) => setBrand(event.target.value)}
            />
            <h5>Taille</h5>
            <input
              type="text"
              placeholder="ex:40/41"
              onChange={(event) => setSize(event.target.value)}
            />
            <h5>Couleur</h5>
            <input
              type="text"
              placeholder="ex:noire"
              onChange={(event) => setColor(event.target.value)}
            />
            <h5>Etat</h5>
            <input
              type="text"
              placeholder="Neuf, sans étiquette"
              onChange={(event) => setCondition(event.target.value)}
            />
            <h5>Lieu</h5>
            <input
              type="text"
              placeholder="ex:Lyon"
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div>
            <h5>Prix</h5>
            <input
              type="text"
              placeholder="0,00€"
              onChange={(event) => setPrice(event.target.value)}
            />
            <br />
            <input type="checkbox" id="shareOk" name="share" />
            <label for="shareOk">
              Souhaitez-vous vous abonner à la newsletter ?
            </label>
          </div>
          <br />
          <input type="submit" className="button" />
        </form>

        {data && <img src={data.secure_url} alt="" />}
      </div>
    </div>
  );
};

export default Publish;
