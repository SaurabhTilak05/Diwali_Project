import React from "react";
import "./GalleryPage.css";

const images = [
  "/rangoli1.jpeg",
  "/rangoli2.jpeg",
  "/rangoli3.jpeg",
  "/rangoli4.jpeg",
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
