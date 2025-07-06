import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-row">
            <span className="footer-made-with">🏎️ Built with React & Framer Motion at F1 speeds</span>
            <span className="footer-copyright">© 2025 Subham Moda</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 