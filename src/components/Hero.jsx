import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 space-y-4">
      <motion.img
        src="https://images.unsplash.com/photo-1502720705749-3cfa5a87f318?crop=faces&fit=crop&h=200&w=200"
        alt="Portrait"
        className="w-40 h-40 rounded-full object-cover shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Subham Moda</h1>
      <p className="max-w-xl text-gray-600 text-lg sm:text-xl">
        Data Engineer &amp; Data Scientist passionate about building scalable data solutions and uncovering insights.
      </p>
    </section>
  );
}
