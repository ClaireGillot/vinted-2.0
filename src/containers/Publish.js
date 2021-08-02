import "../App.css";
import axios from "axios";
import { useState } from "react";

const Publish = () => {
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
  const token = "a  aller chercher dans le cookie";

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
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="publish">
        <form onSubmit={handleSubmit}>
          <h2>Vends ton article</h2>
          <div>
            <input
              type="file"
              onChange={(event) => setPicture(event.target.files)}
            />
          </div>
          <div>
            <h3>Titre</h3>
            <input
              type="text"
              placeholder="ex:Chaussure de marche"
              onChange={(event) => setTitle(event.target.value)}
            />
            <h3>Décris ton article</h3>
            <input
              type="text"
              placeholder="ex:jamais portées, lacets en plus"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div>
            <h3>Marque</h3>
            <input
              type="text"
              placeholder="ex:Nike"
              onChange={(event) => setBrand(event.target.value)}
            />
            <h3>Taille</h3>
            <input
              type="text"
              placeholder="ex:40/41"
              onChange={(event) => setSize(event.target.value)}
            />
            <h3>Couleur</h3>
            <input
              type="text"
              placeholder="ex:noire"
              onChange={(event) => setColor(event.target.value)}
            />
            <h3>Etat</h3>
            <input
              type="text"
              placeholder="Neuf, sans étiquette"
              onChange={(event) => setCondition(event.target.value)}
            />
            <h3>Lieu</h3>
            <input
              type="text"
              placeholder="ex:Lyon"
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div>
            <h3>Prix</h3>
            <input
              type="text"
              placeholder="0,00€"
              onChange={(event) => setPrice(event.target.value)}
            />
            <input type="checkbox" id="shareOk" name="share" />
            <label for="shareOk">
              Souhaitez-vous vous abonner à la newsletter ?
            </label>
          </div>
          <button>Ajouter</button>
        </form>
        {data && <img src={data.secure_url} alt="" />}
      </div>
    </>
  );
};

export default Publish;
