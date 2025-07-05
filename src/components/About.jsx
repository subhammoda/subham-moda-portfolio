import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
        id="aboutme"
        className="scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >
        <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-3xl font-bold mb-2 text-blue-700 underline decoration-blue-300">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                I'm a Data Engineer and Data Scientist with a passion for building data pipelines, working with cloud infrastructure, and solving business problems through analytics. I specialize in Python, SQL, and cloud platforms like AWS and GCP.
            </p>
        </div>
    </motion.section>
  );
}
