import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import homeImg from "../assets/home.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Easily Manage Your <span>Daily Tasks</span>
          </h1>
          <p>Stay organized and boost productivity with our smart task manager.</p>
          <Link to="/signin" className="cta-btn">
            Login to Access →
          </Link>
        </div>
        <div className="hero-image">
          <img src={homeImg} alt="Task Manager" />
        </div>
      </section>

   
    </div>
  );
};

export default Home;
