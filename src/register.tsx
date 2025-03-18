import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    axios
      .post("/api/register", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
        redirect("/login");
      })
      .catch((error) => {
        console.error("There was an error registering:", error);
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => redirect("/login")}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
