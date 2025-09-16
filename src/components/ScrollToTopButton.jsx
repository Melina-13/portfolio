import React, { useState } from "react";

const Button = () => {
  const [pressed, setPressed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Passe bottom-6 à bottom-16 (ou bottom-20 si tu veux encore plus haut)
    <div className="fixed right-6 bottom-16 flex items-center" style={{ zIndex: 1000 }}>
      <button
        type="button"
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        onClick={scrollToTop}
        style={{
          width: "54px",
          height: "46px",
          border: "none",
          borderRadius: "50%",
          position: "relative",
          cursor: "pointer",
          padding: 0,
          background: "transparent",
        }}
      >
        {/* Base arrière */}
        <span
          style={{
            background: "#bb6bab",
            borderRadius: "50%",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
        {/* Bouton avant avec relief */}
        <span
          style={{
            background: `linear-gradient(0deg, #fcbef8 35%, #bb6bab 100%)`,
            boxShadow: pressed
              ? "none"
              : "0 .45em 1em -0.18em #d8effc",
            borderRadius: "50%",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            border: `1.2px solid #bb6bab`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
            fontWeight: 600,
            fontFamily: "inherit",
            transform: pressed ? "translateY(0)" : "translateY(-15%)",
            transition: ".15s",
            color: "#bb6bab",
            zIndex: 1,
          }}
        >
          ↑
        </span>
      </button>
    </div>
  );
};

export default Button;
