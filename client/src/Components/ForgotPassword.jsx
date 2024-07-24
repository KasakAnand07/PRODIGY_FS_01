// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/forgot-password", {
      email,
    }).then(response => {
      if(response.data.status) {
        alert("check you email for reset password link")
        navigate('/login')
      }
    }).catch(err => {
        console.log(err)
    })
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2 style={{textAlign: 'center', marginTop: '6px'}}>Forgot Password</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Please enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ForgotPassword