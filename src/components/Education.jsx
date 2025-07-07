import { motion } from 'framer-motion';

export default function Education() {
  // Sort by year ascending (oldest first)
  const educationData = [
    {
      degree: 'MS in Data Science',
      institution: 'Stevens Institute of Technology',
      year: '2024',
      location: 'Hoboken, United States',
      gpa: '3.93/4.0',
      icon: 'https://cdn.brandfetch.io/idFBKpUqsw/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751325173379',
    },
    {
      degree: 'BTech in Information Technology',
      institution: 'NMIMS University',
      year: '2020',
      location: 'Mumbai, India', 
      gpa: '3.5/4.0',
      icon: 'https://cdn.brandfetch.io/idRQ5xiBH6/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1747800992546',
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
        <h2>🏫 Racing Academy</h2>
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
                  {edu.icon.startsWith('http') ? (
                    <img src={edu.icon} alt={edu.institution + ' logo'} style={{ width: 48, height: 48, borderRadius: '50%' }} />
                  ) : (
                    <span className="icon-emoji">{edu.icon}</span>
                  )}
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
