import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <main className="pt-20 space-y-24 max-w-5xl mx-auto px-4">
        <About />
        <Education />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}