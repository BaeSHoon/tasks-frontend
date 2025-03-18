import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    axios.defaults.withCredentials = true;

    axios
      .post("/api/login", {
        username: username,
        password: password,
      })
      .then((_response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("There was an error logging in:", error);
        setError("Login failed. Please check your username and password.");
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
