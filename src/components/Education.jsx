import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700 underline decoration-indigo-300">Education</h2>
        <ul className="space-y-2 text-gray-700 text-lg tracking-wide">
          <li>
            <strong>MS in Data Science</strong>, Stevens Institute of Technology (May 2024)
          </li>
          <li>
            <strong>BTech in Information Technology</strong>, NMIMS University (May 2020)
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
