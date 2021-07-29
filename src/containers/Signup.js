import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>S'incrire</h3>
        <input type="text" />
        <input type="email" />
        <input type="password" />
        <button>S'incrire</button>
        <Link to={`/login/`}>Tu as déjà un compte ? Connecte-toi !</Link>
      </form>
    </div>
  );
};

export default Signup;
