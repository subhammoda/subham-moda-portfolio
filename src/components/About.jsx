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
          className="col-lg-6 mb-4"
        >
          <div className="card h-100 about-card">
            <div className="about-content">
              <div className="about-header mb-4">
                <div className="about-avatar">
                  <div className="avatar-placeholder">
                    <span className="avatar-text">SM</span>
                  </div>
                  <div className="avatar-rings">
                    <div className="avatar-ring avatar-ring-1"></div>
                    <div className="avatar-ring avatar-ring-2"></div>
                    <div className="avatar-ring avatar-ring-3"></div>
                  </div>
                </div>
                <h3 className="text-gradient">Subham Moda</h3>
                <p className="text-muted">🏎️ Data Engineer & Data Scientist</p>
                <div className="driver-badges">
                  <span className="driver-badge">🏆 Champion</span>
                  <span className="driver-badge">⚡ Fast</span>
                  <span className="driver-badge">🎯 Precise</span>
                </div>
              </div>
              
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
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🏁</div>
                  <div className="highlight-text">
                    <strong>Pole Position Performance</strong>
                    <p>Deliver data solutions with F1-level precision and speed</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-text">
                    <strong>Lightning Fast Pipelines</strong>
                    <p>Build high-performance data infrastructure that scales</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🏆</div>
                  <div className="highlight-text">
                    <strong>Championship Results</strong>
                    <p>Transform complex data into winning insights</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-text">
                    <strong>Data Quality Focus</strong>
                    <p>Ensure 99.5% accuracy in all data operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="col-lg-6"
        >
          <div className="card skills-card">
            <div className="skills-header">
              <h4 className="mb-4">🏎️ Technical Telemetry</h4>
              <p className="text-muted">My core competencies and performance metrics</p>
            </div>
            
            <div className="skills-container">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="skill-item"
                >
                  <div className="skill-header">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-category">{skill.category}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="row mt-5"
      >
        <div className="col-12">
          <div className="card achievements-card">
            <h4 className="text-center mb-4">🏆 Championship Statistics</h4>
            <div className="row">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="col-lg-3 col-md-6 mb-3"
                >
                  <div className="achievement-item">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-value">{achievement.value}</div>
                    <div className="achievement-title">{achievement.title}</div>
                    <div className="achievement-description">{achievement.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
