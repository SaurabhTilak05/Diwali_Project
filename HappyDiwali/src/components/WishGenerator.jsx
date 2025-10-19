import React, { useState } from "react";
import "./WishGenerator.css";

function WishGenerator() {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");

  const generateWish = () => {
    if (name.trim() === "") {
      setWish("✨ Happy Diwali! ✨");
    } else {
      setWish(`✨ Happy Diwali, ${name}! ✨`);
    }
  };

  return (
    <section id="wish" className="wish-section">
      <h2 className="glow-text">💌 Generate Your Diwali Wish 💌</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={generateWish}>Generate Wish</button>
      {wish && <p className="wish-text">{wish}</p>}
    </section>
  );
}

export default WishGenerator;
