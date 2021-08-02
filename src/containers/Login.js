import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPasseword] = useState("");
  const history = useHistory();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      }
    } catch (error) {
      // console.log(error.response);
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h3>Se connecter</h3>
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            onChange={(event) => setPasseword(event.target.value)}
            type="password"
            placeholder="Mot de passe"
          />
          <br />
          <input type="submit" value="Se connecter" className="button" />
          <br />
          <Link to={`/signup`}>Pas encore de compte ? Inscris-toi!</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
