// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:3000/auth/verify").then((res) => {
      if (res.data.status) {
        setIsAuthorized(true);
      } else {
        setShowWarning(true);
        setTimeout(() => {
          navigate("/");
        }, 1500); // Redirects to home page after 3 seconds
      }
      console.log(res);
    });
  }, [navigate]);

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((res) => {
      if (res.data.status) {
        setIsAuthorized(false);
        navigate("/");
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div
      style={{
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#cbdbff",
      }}
    >
      <div className="header">
        <a href="/">Home</a>
      </div>

      <div className="content">
        <h2>Dashboard</h2>
        {showWarning ? (
          <p>You are not authorized to access this page😞</p>
        ) : isAuthorized ? (
          <>
            <p>Hey Admin! You have access to view this page🥳</p>
            <button
              onClick={handleLogout}
              style={{
                padding: "10px",
                backgroundColor: "#2e8e49",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <p>Only authorized accounts can access this page</p>
            <button
              onClick={handleSignup}
              style={{
                padding: "10px",
                backgroundColor: "#2e8e49",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
