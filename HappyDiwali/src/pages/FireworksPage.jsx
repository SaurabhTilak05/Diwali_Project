import React, { useState } from "react";
import "./FireworksPage.css";

const sounds = [
  "/fataka.mp3",
  "/fataka2.mp3",
  "/fataka3.mp3",
];

function StarryFireworks() {
  const [fireworks, setFireworks] = useState([]);

  const launchFirework = () => {
    const x = Math.random() * 90 + 5; // horizontal position
    const soundIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[soundIndex]);
    audio.play();

    const id = Date.now();
    const stars = Array.from({ length: 60 }).map(() => ({
      dx: (Math.random() - 0.5) * 200, // horizontal spread
      dy: -(Math.random() * 200 + 50), // vertical spread
      size: Math.random() * 3 + 2, // 2px - 5px
    }));

    setFireworks((prev) => [...prev, { x, id, stars }]);

    setTimeout(() => {
      setFireworks((prev) => prev.filter((fw) => fw.id !== id));
    }, 2500);
  };

  return (
    <div className="fireworks-wrapper" onClick={launchFirework}>
      <h2 className="glow-text">Click to Launch Starry Fireworks!</h2>
      <div className="sky">
        {fireworks.map((fw) => (
          <div key={fw.id} className="rocket" style={{ left: `${fw.x}%` }}>
            <div className="rocket-body"></div>
            <div className="explosion">
              {fw.stars.map((star, i) => (
                <span
                  key={i}
                  className="star"
                  style={{
                    "--dx": star.dx + "px",
                    "--dy": star.dy + "px",
                    width: star.size + "px",
                    height: star.size + "px",
                  }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarryFireworks;
