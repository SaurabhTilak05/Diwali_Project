import React, { useState } from "react";
import "./Diyas.css";

function Diyas() {

  const [lit, setLit] = useState([false, false, false, false]);

  const toggleDiya = (index) => {
    const newLit = [...lit];
    newLit[index] = !newLit[index];
    setLit(newLit);
  };

  return (
    <section id="diyas" className="diyas-section">
      <h2 className="glow-text">🪔 Light the Diyas 🪔</h2>
      <p>Click on each diya to light it up!</p>

      <div className="diyas-container">
        {lit.map((isLit, index) => (
          <div
            key={index}
            className={`diya ${isLit ? "lit" : ""}`}
            onClick={() => toggleDiya(index)}
          >
            <span className="flame"></span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Diyas;
