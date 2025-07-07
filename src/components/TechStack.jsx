import { motion } from 'framer-motion';

const allTechSkills = [
  { name: "Python", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "R", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg" },
  { name: "MySQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "Oracle", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" },
  { name: "PostgreSQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "SQL Server", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
  { name: "GCP", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" },
  { name: "AWS", img: "https://img.icons8.com/?size=100&id=G0CnLqqcRBXl&format=png&color=FFFFFF" },
  { name: "Azure", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
  { name: "Airflow", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apacheairflow/apacheairflow-original.svg" },
  { name: "Snowflake", img: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg" },
  { name: "Hadoop", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/hadoop/hadoop-original.svg" },
  { name: "Looker", img: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/looker.svg" },
  { name: "Tableau", img: "https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000" },
  { name: "Power BI", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Jupyter", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg" },
  { name: "PyCharm", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pycharm/pycharm-original.svg" },
  { name: "Visual Studio", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg" },
  { name: "Git", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "Linux", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
  { name: "Cursor", img: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-title"
      >
        <h2>🛠️ Technical Arsenal</h2>
        <p className="text-muted mt-3">My Championship-Winning Toolkit</p>
      </motion.div>

      <div className="tech-arsenal-container">
        {/* F1 Track background */}
        <div className="f1-track-background"></div>
        <div className="techstack-grid">
          {allTechSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="techstack-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
            >
              <div className="techstack-icon-ring">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="techstack-img"
                  width={50}
                  height={50}
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="techstack-label">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
