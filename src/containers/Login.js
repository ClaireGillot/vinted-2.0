import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Se connecter</h3>
        <input type="email" />
        <input type="password" />
        <button>Se connecter</button>
        <Link to={`/signup`}>Pas encore de compte ? Inscris-toi!</Link>
      </form>
    </div>
  );
};

export default Login;
