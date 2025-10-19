import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DiyasPage from "./pages/DiyasPage";
import GalleryPage from "./pages/GalleryPage";
import WishPage from "./pages/WishPage";
import FireworksPage from "./pages/FireworksPage";
import "./App.css"; // make sure we add flex styling here

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/diyas" element={<DiyasPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/wish" element={<WishPage />} />
            <Route path="/enjoy" element={<FireworksPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
