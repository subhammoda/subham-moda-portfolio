import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 text-gray-900 font-sans">
      <Navbar />
      <main className="pt-24 px-4 sm:px-8 max-w-5xl mx-auto space-y-24">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
