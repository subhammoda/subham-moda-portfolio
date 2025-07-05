import { motion } from 'framer-motion';

export default function Experience() {
  // Sort by period ascending (oldest first, using the start year)
  const experienceData = [
    {
      title: 'Data Scientist Intern',
      company: 'ResMed',
      period: '2023',
      location: 'San Diego, CA',
      description: 'Led the pit crew in extracting structured clinical data using OCR, BERT-NER, and AWS EKS. Achieved 83% accuracy for ICD10/medication extraction, setting new lap records in medical data processing.',
      technologies: ['OCR', 'BERT-NER', 'AWS EKS', 'Python', 'Machine Learning'],
      achievements: [
        '🏁 Set new lap record with 83% accuracy in medical data extraction',
        '⚡ Implemented BERT-based Named Entity Recognition for clinical data',
        '🏆 Deployed championship-winning solutions on AWS EKS'
      ],
      icon: '🏥',
      teamRole: 'Pit Crew Lead'
    },
    {
      title: 'Data Engineer',
      company: 'Quantiphi Inc',
      period: '2020–2022',
      location: 'Mumbai, India',
      description: 'Engineered high-performance data pipelines with BigQuery, Airflow, and Cloud Data Fusion. Created 30+ championship-winning dashboards and profiled 1TB+ SSMS logs with F1-level precision.',
      technologies: ['BigQuery', 'Apache Airflow', 'Cloud Data Fusion', 'Tableau', 'SQL'],
      achievements: [
        '🏆 Built and maintained 30+ podium-finishing data dashboards',
        '⚡ Processed and analyzed 1TB+ of SSMS logs at record speed',
        '🏁 Designed championship-caliber ETL pipelines using Google Cloud Platform'
      ],
      icon: '🏎️',
      teamRole: 'Race Engineer'
    }
  ].sort((a, b) => {
    // Sort by start year (extract first 4 digits)
    const aYear = parseInt(a.period);
    const bYear = parseInt(b.period);
    return aYear - bYear;
  });

  return (
    <section id="experience" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-title"
      >
        <h2>🏁 Race History</h2>
      </motion.div>

      <div className="experience-timeline-horizontal">
        <div className="experience-timeline-horizontal-line"></div>
        {experienceData.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="experience-item-horizontal"
          >
            <div className="experience-dot-horizontal"></div>
            <div className="experience-card card">
              <div className="experience-header">
                <div className="experience-icon">
                  <span className="icon-emoji">{exp.icon}</span>
                </div>
                <div className="experience-info">
                  <h4 className="experience-title">{exp.title}</h4>
                  <h5 className="experience-company">{exp.company}</h5>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                  <div className="experience-role">
                    <span className="role-badge">{exp.teamRole}</span>
                  </div>
                </div>
              </div>
              
              <div className="experience-content">
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-achievements">
                  <h6 className="achievements-title">🏆 Podium Finishes:</h6>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-technologies">
                  <h6 className="technologies-title">🔧 Pit Crew Tools:</h6>
                  <div className="technology-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="experience-badge">
                <span className="badge bg-gradient text-white">
                  {exp.period}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
