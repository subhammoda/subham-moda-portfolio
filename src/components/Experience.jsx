import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-3xl font-bold mb-4 text-emerald-700 underline decoration-emerald-300">Work Experience</h2>
        <ul className="space-y-6 text-gray-700 text-lg tracking-wide">
          <li>
            <strong>Data Scientist Intern</strong>, ResMed — 2023
            <p>Worked on OCR, BERT-NER, and AWS EKS to extract and structure clinical data.</p>
          </li>
          <li>
            <strong>Data Engineer</strong>, Quantiphi Inc — 2020–2022
            <p>Built pipelines using BigQuery, Airflow, and Cloud Data Fusion; developed BI dashboards using Looker and Tableau.</p>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
