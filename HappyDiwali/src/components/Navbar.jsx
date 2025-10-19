import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("/bgnoice.mp3"));
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  const toggleMusic = () => {
    if (!isPlaying) {
      audio.loop = true;
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    return () => audio.pause();
  }, [audio]);

  return (
    <nav className="navbar">
      <div className="logo">🎇 Diwali Celebration</div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/diyas" onClick={() => setIsOpen(false)}>Diyas</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link to="/wish" onClick={() => setIsOpen(false)}>Wish</Link>
        <Link to="/enjoy" onClick={() => setIsOpen(false)}>Celebrate</Link>
        <button className="music-btn" onClick={toggleMusic}>
          {isPlaying ? "🔊 Music On" : "🔇 Music Off"}
        </button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
