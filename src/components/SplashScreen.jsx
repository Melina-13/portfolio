import React, { useState, useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Splash visible 1.7s, fade-out 1.3s
    const fadeTimer = setTimeout(() => setIsFading(true), 1700);
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(180deg, #d8effc 0%, #fcbef8 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        opacity: isFading ? 0 : 1,
        transition: "opacity 1.3s cubic-bezier(.5,1,.89,1)",
        pointerEvents: isFading ? "none" : "auto"
      }}
    >
      <img src="/assets/icons/melina.png" alt="Logo" style={{ width: "140px", marginBottom: "30px" }} />
      <h1 style={{ color: "#bb6bab", fontSize: "2.2rem", fontWeight: "bold", marginBottom: "20px" }}>
        MELINA PORTFOLIO
      </h1>
      <span style={{ color: "#bb6bab", fontSize: "1rem" }}>
        Bienvenue dans mon univers pastel...
      </span>
    </div>
  );
}
