import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPasseword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username: username, email: email, phone: phone, password: password }
      );
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.message === 409) {
        setErrorMessage("Cet email est déjà utilisé !");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>S'incrire</h3>
        <input
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="Nom d'utilisateur"
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(event) => setPhone(event.target.value)}
          type="tel"
          placeholder="Numéro de téléphone"
        />
        <input
          onChange={(event) => setPasseword(event.target.value)}
          type="password"
          placeholder="Mot de passe"
        />
        <span>{errorMessage}</span>
        <input type="submit" value="S'incrire" />
        <Link to={`/login/`}>Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default Signup;
