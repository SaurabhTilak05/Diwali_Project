import React, { useState } from "react";
import Fireworks from "../components/Fireworks";
import "./HomePage.css";

function HomePage() {
  const [showFireworks, setShowFireworks] = useState(false);

  const handleFireworks = () => setShowFireworks(!showFireworks);

  return (
    <section className="home-section">
      <h1 className="glow-text">🎆 Happy Diwali! 🎆</h1>
      <p>Welcome to the Interactive Diwali Celebration</p>
      <button onClick={handleFireworks}>
        {showFireworks ? "Stop Fireworks" : "Celebrate with Fireworks!"}
      </button>
      {showFireworks && <Fireworks />}
    </section>
  );
}

export default HomePage;
