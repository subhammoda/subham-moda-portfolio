import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/subham-moda'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/subham-moda'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/subham-moda'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:subham.moda@example.com'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-shapes">
          <div className="footer-shape footer-shape-1"></div>
          <div className="footer-shape footer-shape-2"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-lg-4 mb-4 mb-lg-0"
          >
            <div className="footer-brand">
              <h3 className="text-gradient mb-2">Subham Moda</h3>
              <p className="footer-tagline">
                Data Engineer & Data Scientist - Accelerating data solutions with F1-level precision
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-lg-4 mb-4 mb-lg-0"
          >
            <div className="footer-links text-center">
              <h6 className="mb-3">🏁 Quick Navigation</h6>
              <div className="footer-nav">
                <a href="#aboutme" className="footer-link">Driver Profile</a>
                <a href="#experience" className="footer-link">Race History</a>
                <a href="#projects" className="footer-link">Championship Projects</a>
                <a href="#contact" className="footer-link">Pit Lane</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-lg-4"
          >
            <div className="footer-social text-center text-lg-end">
              <h6 className="mb-3">🏆 Join the Team</h6>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -5 }}
                  >
                    <span className="social-emoji">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <div className="footer-divider"></div>
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="footer-copyright">
                © {currentYear} Subham Moda. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="footer-made-with">
                🏎️ Built with React & Framer Motion at F1 speeds
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 