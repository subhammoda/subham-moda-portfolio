import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 font-sans">
      <div className="bg-red-500 text-white p-4">Tailwind test</div>
      <Navbar />
      <main className="pt-24 px-4 sm:px-8 max-w-4xl mx-auto space-y-24">
        <About />
        <Education />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
