import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-blue-100">
      <Header />
      {/* Section Hero visible dès l'arrivée */}
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
    </div>
  );
}
