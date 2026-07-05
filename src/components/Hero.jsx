import "../styles/hero.css";

import vinyl from "../assets/vinyl.png";
import album from "../assets/albums/billie-hit-me-hard.webp";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">
          PREMIUM VINYL COLLECTION
        </p>

        <h1>
          HIT ME HARD
          <br />
          AND SOFT
        </h1>

        <p className="hero-text">
          Billie Eilish's latest masterpiece on premium vinyl.
          Experience every detail the way music was meant to be heard.
        </p>

        <button>
          Shop Collection
        </button>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >

        <img
          src={vinyl}
          className="vinyl"
          alt=""
        />

        <img
          src={album}
          className="album-cover"
          alt=""
        />

      </motion.div>

    </section>
  );
}
