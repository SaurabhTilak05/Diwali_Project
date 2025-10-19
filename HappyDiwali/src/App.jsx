import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DiyasPage from "./pages/DiyasPage";
import GalleryPage from "./pages/GalleryPage";
import WishPage from "./pages/WishPage";
import FireworksPage from "./pages/FireworksPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diyas" element={<DiyasPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/wish" element={<WishPage />} />
          <Route path="/enjoy" element={<FireworksPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
