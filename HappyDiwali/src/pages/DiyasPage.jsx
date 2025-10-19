import React, { useState } from "react";
import "./DiyasPage.css";

function DiyasPage() {
  const [lit, setLit] = useState([false, false, false, false, false]);

  const toggleDiya = (index) => {
    const newLit = [...lit];
    newLit[index] = !newLit[index];
    setLit(newLit);
     const audio = new Audio(process.env.PUBLIC_URL + "/assets/diya.mp3");
    audio.play();
  };

  const lightAll = () => setLit([true, true, true, true, true]);
  const turnOffAll = () => setLit([false, false, false, false, false]);

  return (
    <div className="diyas-page">
      <section className="diyas-section">
        <h2 className="glow-text">🪔 Light the Diyas 🪔</h2>
        <div className="diya-buttons">
          <button className="btn-light" onClick={lightAll}>Light All</button>
          <button className="btn-off" onClick={turnOffAll}>Turn Off All</button>
        </div>
        <div className="diyas-container">
          {lit.map((isLit, idx) => (
            <div key={idx} className={`diya ${isLit ? "lit" : ""}`} onClick={() => toggleDiya(idx)}>
              <div className="flame"></div>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer-sectionn">
        &copy; 2025 Diwali Celebration. All Rights Reserved.
      </footer>
    </div>
  );
}

export default DiyasPage;
