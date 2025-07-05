const sections = ["About Me", "Education", "Experience", "Projects"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Subham Moda</h1>
        <div className="space-x-4">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/ /g, "")}`}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
