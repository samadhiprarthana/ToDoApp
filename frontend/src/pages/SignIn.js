import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";
import signupImage from "../assets/loging.jpg"; // Ensure the correct image path

const SignIn = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-form">
          <h2>Login</h2>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Register</Link></p>
        </div>
        <div className="auth-image">
          <img src={signupImage} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
