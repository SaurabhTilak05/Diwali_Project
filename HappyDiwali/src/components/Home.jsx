import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <motion.h1
        className="glow-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎇 Happy Diwali! 🎇
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Let’s celebrate light, joy, and happiness together.
      </motion.p>

      <motion.a
        href="#diyas"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button>Celebrate Now</button>
      </motion.a>
    </section>
  );
}

export default Home;
