export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul className="space-y-6">
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
    </section>
  );
}
