import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeInSite, setFadeInSite] = useState(false);

  // Quand la splash se termine, lance le fondu entrant du site
  const handleSplashFinish = () => {
    setShowSplash(false);
    setTimeout(() => setFadeInSite(true), 100); // Petit délai pour enchaîner les transitions
  };

  return (
    <div className="relative min-h-screen bg-blue-100">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div
        style={{
          opacity: fadeInSite ? 1 : 0,
          transition: "opacity 1s cubic-bezier(.5,1,.89,1)"
        }}
      >
        {!showSplash && (
          <>
            <Header />
            <section id="hero">
              <Hero />
            </section>
            <main>
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="skills">
                <Skills />
              </section>
            </main>
            <footer id="footer">
              <Footer />
            </footer>
            <ScrollToTopButton />
          </>
        )}
      </div>
    </div>
  );
}
