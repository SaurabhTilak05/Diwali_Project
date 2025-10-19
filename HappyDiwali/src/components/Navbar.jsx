
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(process.env.PUBLIC_URL + "/assets/bgnoice.mp3"));
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  // Play/pause music
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

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Stop audio when component unmounts
  useEffect(() => {
    return () => audio.pause();
  }, [audio]);

  return (
    <nav className="navbar">
      <div className="logo">🎇 Diwali Celebration</div>

      {/* Navigation links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/diyas" onClick={() => setIsOpen(false)}>Diyas</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link to="/wish" onClick={() => setIsOpen(false)}>Wish</Link>
        <Link to="/enjoy" onClick={() => setIsOpen(false)}>Celebrate</Link>

        {/* Music toggle button */}
        <button className="music-btn" onClick={toggleMusic}>
          {isPlaying ? "🔊 Music On" : "🔇 Music Off"}
        </button>
      </div>

      {/* Hamburger menu for mobile */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
