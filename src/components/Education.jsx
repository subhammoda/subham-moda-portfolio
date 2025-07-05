import { motion } from 'framer-motion';

export default function Education() {
  // Sort by year ascending (oldest first)
  const educationData = [
    {
      degree: 'MS in Data Science',
      institution: 'Stevens Institute of Technology',
      year: '2024',
      location: 'Hoboken, NJ',
      description: 'Mastered advanced data science techniques with focus on machine learning, statistical analysis, and big data technologies. Graduated with honors, achieving pole position in academic performance.',
      gpa: '3.93/4.0',
      icon: '🏆',
      achievement: 'Pole Position Graduate'
    },
    {
      degree: 'BTech in Information Technology',
      institution: 'NMIMS University',
      year: '2020',
      location: 'Mumbai, India',
      description: 'Built strong foundation in software engineering, database systems, and web technologies. Completed with distinction, setting lap records in academic excellence.',
      gpa: '3.5/4.0',
      icon: '🏁',
      achievement: 'Fastest Lap Graduate'
    }
  ].sort((a, b) => a.year.localeCompare(b.year));

  return (
    <section id="education" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-title"
      >
        <h2>🏎️ Racing Academy</h2>
      </motion.div>

      <div className="education-timeline-horizontal">
        <div className="education-timeline-horizontal-line"></div>
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="education-item-horizontal"
          >
            <div className="education-dot-horizontal"></div>
            <div className="education-card card">
              <div className="education-header">
                <div className="education-icon">
                  <span className="icon-emoji">{edu.icon}</span>
                </div>
                <div className="education-info">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <h5 className="education-institution">{edu.institution}</h5>
                  <div className="education-meta">
                    <span className="education-year">{edu.year}</span>
                    <span className="education-location">{edu.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="education-content">
                <p className="education-description">{edu.description}</p>
                <div className="education-gpa">
                  <span className="gpa-label">🏁 Qualifying Time:</span>
                  <span className="gpa-value">{edu.gpa}</span>
                </div>
                <div className="education-achievement">
                  <span className="achievement-badge">{edu.achievement}</span>
                </div>
              </div>
              
              <div className="education-badge">
                <span className="badge bg-gradient text-white">
                  {edu.year}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
