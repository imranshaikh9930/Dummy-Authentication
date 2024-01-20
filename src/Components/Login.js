import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "atuny0" ,
          password: "9uQFF1Lh",
        }),
      });

      if (response) {
        const userData = await response.json();

        // console.log(userData);
        localStorage.setItem("userData", JSON.stringify(userData));

      
        navigate("/profile");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return (
    <div className="container">
      <form action="" onSubmit={handleLogin}>
        <p>Welcome back!👋 </p>
        <h3>Sign in to your account</h3>
        <label htmlFor="email">Your email</label> <br />
        <input
          type="text"
          name="email"
          id="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="password">Password</label> <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button>CONTINUE</button> <br />
        <small className="forget">Forget your password?</small>
      </form>

      <small className="sign-up">
        Dont have account? <span className="sign-up-btn">Sign Up</span>
      </small>
    </div>
  );
}

export default Login;
