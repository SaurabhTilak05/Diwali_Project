import React from "react";
import "./RangoliGallery.css";

function RangoliGallery() {
  const images = [
    "rangoli3.jpeg",
    "https://i.pinimg.com/736x/1c/67/b3/1c67b3a804ad88ad1795dc4ccaa210e8.jpg",
    "https://i.pinimg.com/736x/20/f3/10/20f310502e0d5c4a43a5e861da2b32db.jpg",
    "https://i.pinimg.com/736x/f2/6c/26/f26c26b4f4cbf3c7a6f5f0c5f3c9ef3a.jpg",
    "https://i.pinimg.com/736x/dc/2c/56/dc2c562e527cb0a6b4d9b940de395cae.jpg",
    "https://i.pinimg.com/736x/43/f8/38/43f838dfc4f25506bcd012cfa7f4e132.jpg",
  ];

  return (
    <section id="rangoli" className="gallery-section">
      <h2 className="glow-text">🎨 Rangoli Gallery 🎨</h2>
      <p>Beautiful rangoli art to brighten your Diwali!</p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Rangoli ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RangoliGallery;
