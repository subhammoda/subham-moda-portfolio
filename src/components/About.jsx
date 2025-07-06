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
        <h2>🏁 Driver Profile</h2>
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
                  I'm a passionate Data Engineer and Data Scientist who approaches data challenges with the precision and speed of an F1 driver. 
                  Just like a racing team optimizes every component for maximum performance, I design data solutions that deliver 
                  championship-winning results with cutting-edge technologies.
                </p>
                
                <p className="about-description">
                  My expertise spans the entire data pipeline - from raw data ingestion to real-time analytics dashboards. 
                  I've successfully implemented data-driven solutions using technologies like Apache Airflow, Google Cloud Platform, 
                  AWS, and visualization tools like Tableau and Looker, always pushing the limits of what's possible.
                </p>
              </div>
              
              <div className="about-highlights" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-3 d-flex justify-content-center">
                    <div className="highlight-item text-center w-100">
                      <div className="highlight-icon text-center">🏁</div>
                      <div className="highlight-text text-center">
                        <strong className="text-center">Pole Position Performance</strong>
                        <p className="text-center">Deliver data solutions with F1-level precision and speed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3 d-flex justify-content-center">
                    <div className="highlight-item text-center w-100">
                      <div className="highlight-icon text-center">⚡</div>
                      <div className="highlight-text text-center">
                        <strong className="text-center">Lightning Fast Pipelines</strong>
                        <p className="text-center">Build high-performance data infrastructure that scales</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3 d-flex justify-content-center">
                    <div className="highlight-item text-center w-100">
                      <div className="highlight-icon text-center">🏆</div>
                      <div className="highlight-text text-center">
                        <strong className="text-center">Championship Results</strong>
                        <p className="text-center">Transform complex data into winning insights</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3 d-flex justify-content-center">
                    <div className="highlight-item text-center w-100">
                      <div className="highlight-icon text-center">🎯</div>
                      <div className="highlight-text text-center">
                        <strong className="text-center">Data Quality Focus</strong>
                        <p className="text-center">Ensure 99.5% accuracy in all data operations</p>
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
