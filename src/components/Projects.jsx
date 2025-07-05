import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-3xl font-bold mb-4 text-purple-700 underline decoration-purple-300">Projects</h2>
        <ul className="space-y-6 text-gray-700 text-lg tracking-wide">
          <li>
            <strong>Personalized QA LLM</strong>: Used FAISS and Gemini LLM to build a question-answering system using RAG architecture.
          </li>
          <li>
            <strong>Real-Time CDC Lakehouse</strong>: Built a streaming pipeline with Kafka and Snowflake to support real-time analytics.
          </li>
          <li>
            <strong>Yelp Reviews Analysis</strong>: Performed sentiment analysis using TextBlob and SQL in Snowflake on Yelp open dataset.
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
