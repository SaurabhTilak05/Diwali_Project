import React from "react";
import "./GalleryPage.css";

const images = [
  process.env.PUBLIC_URL + "/assets/rangoli1.jpeg",
  process.env.PUBLIC_URL + "/assets/rangoli2.jpeg",
  process.env.PUBLIC_URL + "/assets/rangoli3.jpeg",
  process.env.PUBLIC_URL + "/assets/rangoli4.jpeg",
];

function GalleryPage() {
  return (
    <section className="gallery-section">
      <h2 className="glow-text">🎨 Rangoli Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Rangoli ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GalleryPage;
