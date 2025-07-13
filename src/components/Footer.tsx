import React from "react";
import styles from "../styles/Footer.module.css";
import Wavify from "react-wavify";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.waveContainer}>
      <Wavify
        fill="var(--water-color)"
        paused={false}
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.25,
          points: 3,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <div className={styles.textInsideWaves}>
        <p>Hecho con ❤️ por Ori</p>
        <p>© 2025 - Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
