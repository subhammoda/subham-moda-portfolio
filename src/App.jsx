import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <div className="container">
          <About />
          <Education />
          <Experience />
          <Projects />
          <TechStack />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
