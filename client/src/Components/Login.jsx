// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "../App.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    // Clear fields on component mount
    setEmail("");
    setPassword("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          // Clear form fields after successful login
          setEmail("");
          setPassword("");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 style={{ textAlign: "center", marginTop: "6px" }}>Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="new-email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          autoComplete="new-password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#2e8e49",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: "flex"
          }}
        >
          Login
        </button>
        <Link to="/forgotPassword">Forgot Password?</Link>
        <p>
          Dont have an Account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
