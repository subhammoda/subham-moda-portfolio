import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: 'Python', level: 90, icon: '🐍', category: 'Programming' },
    { name: 'SQL', level: 85, icon: '🗄️', category: 'Database' },
    { name: 'Apache Airflow', level: 80, icon: '🌪️', category: 'Orchestration' },
    { name: 'Google Cloud Platform', level: 85, icon: '☁️', category: 'Cloud' },
    { name: 'AWS', level: 75, icon: '⚡', category: 'Cloud' },
    { name: 'Tableau', level: 80, icon: '📊', category: 'Visualization' },
    { name: 'Machine Learning', level: 85, icon: '🤖', category: 'AI/ML' },
    { name: 'Data Engineering', level: 90, icon: '🏗️', category: 'Engineering' }
  ];

  const achievements = [
    { icon: '🏆', title: 'Championship Wins', value: '50+', description: 'Successful Data Projects' },
    { icon: '⚡', title: 'Pole Positions', value: '25+', description: 'High-Performance Solutions' },
    { icon: '🏁', title: 'Fastest Laps', value: '100+', description: 'Optimized Pipelines' },
    { icon: '🎯', title: 'Accuracy Rate', value: '99.5%', description: 'Data Quality Score' }
  ];

  return (
    <section id="aboutme" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-title"
      >
        <h2 style={{ color: '#F47600' }}>👤 Driver Profile</h2>
        <p className="text-muted mt-3">Meet the Data Engineer with F1-Level Precision</p>
      </motion.div>

      <div className="row align-items-center mb-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="col-12 mb-4"
        >
          <div className="card h-100 about-card text-center">
            <div className="about-content">
              <div className="about-description-section">
                <p className="about-description">
                I'm a data engineer and data scientist who builds fast, reliable, and scalable data systems—approaching every problem with the precision and efficiency of an F1 race team. Just as every millisecond counts on the track, every decision in business should be backed by clean, timely, and trusted data.
                </p>
                
                <p className="about-description">
                My experience spans the full data stack: from real-time ingestion and processing to analytics-ready models and self-serve dashboards. I've delivered production-grade solutions using technologies like Apache Airflow, Kafka, dbt, GCP, AWS, Snowflake, and BI tools like Looker and Tableau—helping teams move from raw data to race-winning insights.
                </p>
              </div>
              
              <div className="about-highlights" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-3 d-flex justify-content-center">
                    <div className="highlight-item text-center w-100">
                      <div className="highlight-icon text-center">🏁</div>
                      <div className="highlight-text text-center">
                        <strong className="text-center">Pole Position Performance</strong>
                        <p className="text-center">Deliver data solutions with F1-level accuracy, agility, and technical depth—built for production, not prototypes</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3 d-flex justify-content-center">
                    <div className="highlight-item text-center w-100">
                      <div className="highlight-icon text-center">⚡</div>
                      <div className="highlight-text text-center">
                        <strong className="text-center">Lightning Fast Pipelines</strong>
                        <p className="text-center">Build real-time and batch pipelines with Apache Airflow, Kafka, and Spark—designed to scale cleanly under load</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3 d-flex justify-content-center">
                    <div className="highlight-item text-center w-100">
                      <div className="highlight-icon text-center">🏆</div>
                      <div className="highlight-text text-center">
                        <strong className="text-center">Championship Results</strong>
                        <p className="text-center">Translate complex data into insights that drive business decisions—fueling everything from forecasts to dashboards</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3 d-flex justify-content-center">
                    <div className="highlight-item text-center w-100">
                      <div className="highlight-icon text-center">🎯</div>
                      <div className="highlight-text text-center">
                        <strong className="text-center">Data Quality Focus</strong>
                        <p className="text-center">Implement data contracts, validations, and observability to maintain 99.5%+ data integrity at every stage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements Section */}
    </section>
  );
}
