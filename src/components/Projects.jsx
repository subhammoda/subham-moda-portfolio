import { motion } from 'framer-motion';

export default function Projects() {
  const projectsData = [
    {
      title: 'Personalized QA LLM',
      description: 'Engineered a championship-winning question-answering system using Gemini, FAISS, and RAG (Retrieval-Augmented Generation) for intelligent document processing and querying.',
      technologies: ['Gemini', 'FAISS', 'RAG', 'Python', 'LangChain'],
      category: 'AI/ML',
      icon: '🤖',
      github: 'https://github.com/subham-moda/qa-llm',
      demo: 'https://demo-qa-llm.vercel.app',
      features: [
        '🏁 Pole position document processing and embedding generation',
        '⚡ Lightning-fast semantic search with FAISS',
        '🏆 Championship-level context-aware question answering',
        '🚀 Real-time response generation at F1 speeds'
      ]
    },
    {
      title: 'Real-Time CDC Lakehouse',
      description: 'Built a high-performance Change Data Capture (CDC) streaming pipeline using Kafka and Snowflake for real-time data processing and analytics.',
      technologies: ['Kafka', 'Snowflake', 'Apache Airflow', 'Python', 'SQL'],
      category: 'Data Engineering',
      icon: '⚡',
      github: 'https://github.com/subham-moda/cdc-lakehouse',
      demo: null,
      features: [
        '🏁 Real-time data streaming at F1 velocity',
        '⚡ Change data capture with pit-stop precision',
        '🏆 Automated data pipeline orchestration',
        '🚀 Scalable data warehouse architecture'
      ]
    },
    {
      title: 'Yelp Sentiment Analysis',
      description: 'Developed a championship-caliber sentiment analysis system using TextBlob and Snowflake SQL to analyze customer reviews and extract winning insights.',
      technologies: ['TextBlob', 'Snowflake', 'SQL', 'Python', 'NLP'],
      category: 'Data Analysis',
      icon: '📊',
      github: 'https://github.com/subham-moda/yelp-sentiment',
      demo: null,
      features: [
        '🏁 Natural language processing with pole position accuracy',
        '⚡ Large-scale data analysis in Snowflake at record speed',
        '🏆 Sentiment classification and scoring',
        '🚀 Interactive dashboard for championship insights'
      ]
    },
    {
      title: 'Stock Analysis Package',
      description: 'Created a comprehensive Python CLI tool for long-term stock screening and analysis with advanced filtering capabilities.',
      technologies: ['Python', 'Pandas', 'yfinance', 'CLI', 'Data Analysis'],
      category: 'Finance',
      icon: '📈',
      github: 'https://github.com/subham-moda/stock-analyzer',
      demo: null,
      features: [
        '🏁 Automated stock screening with F1 precision',
        '⚡ Technical and fundamental analysis at lightning speed',
        '🏆 Custom filtering criteria for championship results',
        '🚀 Portfolio optimization tools'
      ]
    },
    {
      title: 'ARIMA Forecasting',
      description: 'Built an ARIMA-based forecasting model in R for electricity production prediction with high accuracy and interpretable results.',
      technologies: ['R', 'ARIMA', 'Time Series', 'Statistics', 'Forecasting'],
      category: 'Time Series',
      icon: '🔮',
      github: 'https://github.com/subham-moda/arima-forecasting',
      demo: null,
      features: [
        '🏁 Time series analysis with pole position accuracy',
        '⚡ ARIMA parameter optimization at record speed',
        '🏆 Forecast accuracy evaluation',
        '🚀 Interactive visualization dashboard'
      ]
    }
  ];

  const categories = ['All', 'AI/ML', 'Data Engineering', 'Data Analysis', 'Finance', 'Time Series'];

  return (
    <section id="projects" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-title"
      >
        <h2>🏆 Championship Projects</h2>
      </motion.div>

      <div className="row">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="col-lg-6 col-xl-4 mb-4"
          >
            <div className="project-card card h-100">
              <div className="project-header">
                <div className="project-icon">
                  <span className="icon-emoji">{project.icon}</span>
                </div>
                <div className="project-category">
                  <span className="category-badge">{project.category}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h6 className="features-title">🏁 Key Features:</h6>
                  <ul className="features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  <h6 className="technologies-title">🔧 Technologies:</h6>
                  <div className="technology-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-footer">
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <span>📁</span> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                    >
                      <span>🚀</span> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
