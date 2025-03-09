import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";
import signupImage from "../assets/signup.jpg"; // Ensure the correct image path

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-form">
          <h2>Register</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <button type="submit">Register</button>
          </form>
          <p>Already have an account? <Link to="/signin">Login in</Link></p>
        </div>
        <div className="auth-image">
          <img src={signupImage} alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
