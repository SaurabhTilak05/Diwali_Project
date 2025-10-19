import React, { useState } from "react";
import "./WishPage.css";

const wishes = [
  "Wishing you a Diwali full of lights and happiness!",
  "May your life shine as bright as Diwali lights!",
  "Happy Diwali! May joy and prosperity be yours.",
  "Wishing you a sparkling Diwali filled with love!",
  "Have a safe and joyful Diwali with your loved ones!",
];

function WishPage() {
  const [name, setName] = useState("");
  const [wishText, setWishText] = useState("");

  const generateWish = () => {
    if (!name.trim()) return;
    const randomIndex = Math.floor(Math.random() * wishes.length);
    setWishText(`${wishes[randomIndex]} Dear ${name}!`);
  };

  return (
    <div className="wish-page">
      <section className="wish-section">
        <h2 className="glow-text">💌 Generate Your Diwali Wish</h2>
        <div className="wish-inputs">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="generate-btn" onClick={generateWish}>
            Generate Wish
          </button>
        </div>
        {wishText && <p className="wish-text">{wishText}</p>}
      </section>
     
    </div>
  );
}

export default WishPage;
