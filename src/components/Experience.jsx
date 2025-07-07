import { motion } from 'framer-motion';

export default function Experience() {
  // Sort by period ascending (oldest first, using the start year)
  const experienceData = [
    {
      title: 'Data Scientist Intern',
      company: 'ResMed',
      period: 'June 2023 - Aug 2023',
      location: 'San Diego, CA',
      description: 'Built and deployed a clinical information extraction system using OCR and transformer-based NER models. Containerized the pipeline into a RESTful API on AWS EKS, reducing manual processing time for nurses and enabling structured clinical data to be available in real time across teams.',
      technologies: ['OCR', 'BERT-NER', 'AWS EKS', 'Python', 'Machine Learning', 'NLP'],
      achievements: [
        '🏁 Extracted ICD10 codes, medication names, dosages, and medical problems from 10K+ unstructured clinical documents using OCR and fine-tuned NER models with domain-specific postprocessing',
        '⚡ Achieved 83% accuracy in entity extraction by leveraging transformer models and domain-tuned preprocessing logic',
        '🏆 Enabled near real-time access to structured medical data for analytics and automation teams through API-driven integration'
      ],
      icon: 'https://cdn.brandfetch.io/idmSBy7FTI/w/1188/h/1188/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1747627680639',
      teamRole: 'Pit Crew Lead'
    },
    {
      title: 'Data Engineer',
      company: 'Quantiphi Inc',
      period: 'July 2020 - July 2022',
      location: 'Mumbai, India',
      description: 'Designed and deployed scalable data pipelines across GCP using Airflow, BigQuery, and Cloud Data Fusion. Delivered high-impact analytics solutions that powered self-serve dashboards, enabled predictive maintenance, and reduced compute usage across 150+ cross-project workloads.',
      technologies: ['BigQuery', 'Apache Airflow', 'Cloud Data Fusion', 'Kafka', 'Spark Streaming', 'Looker', 'Tableau', 'SQL', 'CI/CD (Cloud Build)', 'GCP', 'AWS', 'Python'],
      achievements: [
        '🏆 Optimized Airflow DAGs to reduce ETL runtime from 70-80 mins to under 10 mins, saving ~60 minutes of compute per run and freeing resources for additional workflows',
        '⚡ Automated secure ingestion of cross-project data with Cloud Data Fusion and BigQuery Authorized Views, replacing manual transfer processes across 150+ datasets', 
        '🏁 Delivered 30+ Looker/Tableau dashboards across 150+ KPIs by partnering with product, ops, and analytics teams—replacing 200+ monthly ad-hoc pulls with scalable, self-serve insights'
      ],
      icon: 'https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=contain,w=200,h=200,q=100/sites/www.builtin.com/files/2022-07/1654062078700_29.jpg',
      teamRole: 'Race Engineer'
    }
  ].sort((a, b) => {
    // Extract year and month from the period string
    const getYearMonth = (period) => {
      const match = period.match(/([A-Za-z]{3,9})?\s?(\d{4})/);
      if (!match) return [0, 0];
      const monthStr = match[1] || '';
      const year = parseInt(match[2]);
      const months = ['Jan','January','Feb','February','Mar','March','Apr','April','May','Jun','June','Jul','July','Aug','August','Sep','Sept','September','Oct','October','Nov','November','Dec','December'];
      let month = 0;
      if (monthStr) {
        month = months.findIndex(m => m.toLowerCase().startsWith(monthStr.toLowerCase().slice(0,3)));
        month = Math.floor(month / 2); // since both short and long names are present
      }
      return [year, month];
    };
    const [aYear, aMonth] = getYearMonth(a.period);
    const [bYear, bMonth] = getYearMonth(b.period);
    return aYear !== bYear ? aYear - bYear : aMonth - bMonth;
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
        <h2>🏎️ Race History</h2>
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
                  {exp.icon.startsWith('http') ? (
                    <img src={exp.icon} alt={exp.company + ' logo'} style={{ width: 48, height: 48, borderRadius: '50%' }} />
                  ) : (
                    <span className="icon-emoji">{exp.icon}</span>
                  )}
                </div>
                <div className="experience-info">
                  <h4 className="experience-title">{exp.title}</h4>
                  <h5 className="experience-company">{exp.company}</h5>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
