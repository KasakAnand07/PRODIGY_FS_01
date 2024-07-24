// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:3000/auth/verify").then((res) => {
      console.log(res);
    });
  }, [navigate]);

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div
      style={{
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#cbdbff",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        Home
        <Link to="/dashboard">Dashboard</Link>
        <button
          onClick={handleSignup}
          style={{
            padding: "10px",
            backgroundColor: "#2e8e49",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Sign up
        </button>
      </div>
      <div
        style={{
          marginTop: "110px",
          marginLeft: "110px",
          padding: "20px",
          border: "1px solid #ccc",
          backgroundColor: "#f9f9f9",
          width: "80%",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Hey Visitor! Welcome to Home page👋</h2>
      </div>
    </div>
  );
};

export default Home;
