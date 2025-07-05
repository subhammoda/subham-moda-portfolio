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
      
      {/* Racing Animation */}
      <div className="racing-animation">
        <motion.div
          className="f1-car-racing"
          initial={{ x: "100vw" }}
          animate={{ x: "-100vw" }}
          transition={{ 
            duration: 3,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="car-body">
            <div className="car-front"></div>
            <div className="car-cockpit"></div>
            <div className="car-rear"></div>
            <div className="car-wheels">
              <div className="wheel wheel-front-left"></div>
              <div className="wheel wheel-front-right"></div>
              <div className="wheel wheel-rear-left"></div>
              <div className="wheel wheel-rear-right"></div>
            </div>
            <div className="car-exhaust">
              <div className="exhaust-flame"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Racing Lines */}
        <motion.div
          className="racing-line racing-line-1"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="racing-line racing-line-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
        ></motion.div>
        <motion.div
          className="racing-line racing-line-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
        ></motion.div>
      </div>

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
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="hero-content"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.8 }}
                className="hero-badge"
              >
                <span className="badge bg-gradient text-white px-3 py-2 rounded-pill">
                  🏁 Pole Position in Data Engineering
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.8 }}
                className="hero-title"
              >
                Hi, I'm <span className="text-gradient">Subham Moda</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.8 }}
                className="hero-subtitle"
              >
                Data Engineer & Data Scientist
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3, duration: 0.8 }}
                className="hero-description"
              >
                Accelerating data solutions with F1-level precision and speed. 
                From pit lane to pipeline, I transform raw data into championship-winning insights.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
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
                transition={{ delay: 2.7, duration: 0.8 }}
                className="hero-stats"
              >
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Seasons Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Race Wins</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Pit Crew Tools</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              className="hero-visual"
            >
              <div className="profile-section">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                  className="profile-picture-container"
                >
                  <div className="profile-picture">
                    <div className="profile-image-placeholder">
                      <span className="profile-initials">SM</span>
                    </div>
                    <div className="profile-ring profile-ring-1"></div>
                    <div className="profile-ring profile-ring-2"></div>
                    <div className="profile-ring profile-ring-3"></div>
                  </div>
                  
                  <div className="profile-badges">
                    <div className="profile-badge">
                      <span className="badge-icon">🏆</span>
                      <span className="badge-text">Champion</span>
                    </div>
                    <div className="profile-badge">
                      <span className="badge-icon">⚡</span>
                      <span className="badge-text">Fast</span>
                    </div>
                    <div className="profile-badge">
                      <span className="badge-icon">🎯</span>
                      <span className="badge-text">Precise</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.8 }}
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
                          transition={{ duration: 1, delay: 2.6 }}
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
                          transition={{ duration: 1, delay: 2.8 }}
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
                          transition={{ duration: 1, delay: 3.0 }}
                        ></motion.div>
                      </div>
                      <span className="metric-value">90%</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
