import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* F1 Car Background */}
      <div className="f1-car-background">
        <div className="f1-car-image"></div>
      </div>
      
      {/* Removed racing car and racing lines animation */}

      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="hero-visual"
            >
              <div className="profile-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="profile-picture-container"
                >
                  <div className="profile-picture">
                    <div className="profile-image-placeholder">
                      <img 
                        src={`${import.meta.env.BASE_URL}photo.png`} 
                        alt="Subham Moda profile" 
                        style={{ width: '100%', height: '100%', objectFit: 'fill', borderRadius: '8px' }}
                        draggable="false"
                      />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="data-dashboard"
                >
                  <div className="dashboard-header">
                    <h5 className="dashboard-title">🏎️ Live Telemetry</h5>
                  </div>
                  <div className="dashboard-metrics">
                    <div className="metric-row">
                      <span className="metric-label">Speed</span>
                      <div className="metric-bar">
                        <motion.div
                          className="metric-fill"
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.4 }}
                        ></motion.div>
                      </div>
                      <span className="metric-value">85%</span>
                    </div>
                    <div className="metric-row">
                      <span className="metric-label">Accuracy</span>
                      <div className="metric-bar">
                        <motion.div
                          className="metric-fill"
                          initial={{ width: 0 }}
                          animate={{ width: "95%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                      </div>
                      <span className="metric-value">95%</span>
                    </div>
                    <div className="metric-row">
                      <span className="metric-label">Efficiency</span>
                      <div className="metric-bar">
                        <motion.div
                          className="metric-fill"
                          initial={{ width: 0 }}
                          animate={{ width: "90%" }}
                          transition={{ duration: 1, delay: 0.6 }}
                        ></motion.div>
                      </div>
                      <span className="metric-value">90%</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="hero-content"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.8 }}
                className="hero-badge"
                style={{ fontSize: '1.35rem', fontWeight: 600 }}
              >
                <span className="badge bg-gradient px-3 py-2 rounded-pill" 
                  style={{ color: '#FED502', background: 'none' }}
                >
                  🏁 Pole Position in Data Engineering
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="hero-title"
              >
                Hi, I'm <span className="text-gradient">Subham Moda</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="hero-subtitle"
              >
                Cloud-Native Data Engineer & Applied Data Scientist
              </motion.h2>
              
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.8 }}
                style={{ fontWeight: 500, fontSize: '1.15rem', color: '#FFF200', marginBottom: '1.2rem' }}
              >
                Building fast, scalable, and intelligent data systems that drive real business impact.
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="hero-description"
              >
                Bringing championship precision to cloud data engineering. From pit lane to race track, I build pipelines and platforms that keep business intelligence running at full throttle.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="hero-buttons"
              >
                <button 
                  className="btn btn-primary me-3 mb-3"
                  onClick={() => scrollToSection('aboutme')}
                >
                  🏎️ Start the Engine
                </button>
                <button 
                  className="btn btn-outline mb-3"
                  onClick={() => scrollToSection('projects')}
                >
                  🏆 View Podium Finishes
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="hero-stats"
              >
                <div className="stat-item" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('experience')}>
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Seasons Experience</div>
                </div>
                <div className="stat-item" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('projects')}>
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Race Wins</div>
                </div>
                <div className="stat-item" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('techstack')}>
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Pit Crew Tools</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
