import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1200) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 1;
  });
  const [direction, setDirection] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Story Bot ELI5",
      image: "🧠",
      icon: "🧠",
      category: "AI | ML",
      description: "Built an interactive chatbot that takes complex user-defined topics and returns simplified, story-based explanations suitable for a 5-year-old. Integrated multi-agent architecture using CrewAI to orchestrate topic research, summarization, and storytelling.",
      features: [
        "CrewAI-based multi-agent orchestration for role-specific tasks",
        "Simplifies user prompts into story-like explanations",
        "Streamlit UI for real-time interaction and demo",
        "Fully responsive design for all devices"
      ],
      technologies: ["CrewAI", "Streamlit", "Python", "LLM Agents", "Gemini API"],
      github: "https://github.com/subhammoda/story-bot-eli5"
    },
    {
      id: 2,
      title: "Stock Analysis Package",
      image: "📈",
      icon: "📈",
      category: "Data Analysis | Finance",
      description: "Created a Python package for end-to-end stock performance analysis. Automates data fetching, calculates financial indicators, and visualizes trends to assist in portfolio evaluation and decision-making.",
      features: [
        "Pulls stock data using yfinance",
        "CLI-usable and notebook-friendly module",
        "Includes functions for simulating historical portfolio performance based on weight allocations and rebalancing periods",
        "Generates clear and concise Matplotlib-based visualizations to show trendlines, moving averages, return distributions, and comparisons between tickers"
      ],
      technologies: ["Python", "Pandas", "yfinance", "matplotlib", "seaborn"],
      github: "https://github.com/subhammoda/StockAnalysisPackage"
    },
    {
      id: 3,
      title: "Olist Data Pipeline",
      image: "🚚",
      icon: "🚚",
      category: "Data Engineering | ETL",
      description: "Built an end-to-end ETL pipeline to process the Olist Brazilian e-commerce dataset. The project performs data ingestion, transformation, and modeling to enable reporting on customer behavior, delivery performance, and order trends.",
      features: [
        "Loads raw data from multiple sources covering customers, orders, products, sellers, payments, and reviews",
        "Handles missing values, joins datasets, filters duplicates, and standardizes columns",
        "Follows Medallion Architecture for data transformation: raw → cleaned → analytical (bronze, silver, gold)",
        "Uses Azure Data Factory for orchestration and Databricks for data processing",
        "Stores data in Azure Data Lake Storage (ADLS) and Azure Synapse Analytics for analytics"
      ],
      technologies: ["Python", "Azure", "Azure Data Factory", "Databricks", "MongoDB", "Synapse", "ADLS"],
      github: "https://github.com/subhammoda/Olist-Data-Pipeline"
    },
    {
      id: 4,
      title: "Yelp Reviews Analysis",
      image: "🍽️",
      icon: "🍽️",
      category: "Data Analysis | NLP",
      description: "Developed an end-to-end pipeline to analyze sentiment trends across millions of customer reviews from the Yelp Open Dataset. Leveraged Snowflake for data storage and processing, and applied Python-based sentiment analysis directly within the data warehouse to deliver business-ready insights.",
      features: [
        "Parsed and cleaned millions of records from the Yelp Open Dataset, including businesses, reviews, and user metadata",
        "Applied sentiment analysis using Python UDFs (TextBlob) directly within Snowflake to classify review polarity",
        "Computed KPIs such as average sentiment per business, city-wise satisfaction, and review volume trends using Snowflake SQL",
        "Structured data for seamless dashboard integration (Streamlit/Tableau) to support marketing and operations teams"
      ],
      technologies: ["Python", "Snowflake", "SQL", "TextBlob"],
      github: "https://github.com/subhammoda/Yelp-Reviews-Analysis"
    },
    {
      id: 5,
      title: "IMDb User Reviews Scraper",
      image: "🎥",
      icon: "🎥",
      category: "Web Scraping",
      description: "Built a scalable web scraper to extract user reviews from IMDb movie pages. Enables downstream sentiment and opinion analysis by collecting high-volume audience feedback, structured and saved for further NLP tasks.",
      features: [
        "Uses Selenium to simulate browser behavior and load reviews beyond the initial page",
        "Captures review content, ratings, review titles, and timestamps for each entry",
        "Automatically loops through sepcified number of review pages, ensuring full data coverage",
        "Includes wait logic and retry mechanisms to handle slow-loading or blocked pages",
        "Saves structured data to CSV files for easy downstream processing"
      ],
      technologies: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
      github: "https://github.com/subhammoda/imdb-user-reviews-scraper"
    },
    {
      id: 6,
      title: "Movie Review Sentiment Analysis",
      image: "💬",
      icon: "💬",
      category: "Sentiment Analysis | NLP",
      description: "Performed sentiment analysis on IMDb user reviews to assess public opinion on movies. Applied NLP techniques to classify reviews as positive or negative, and visualized sentiment trends to support audience perception analysis.",
      features: [
        "Tokenization, stopword removal, and lemmatization using NLTK",
        "Applied both VADER (lexicon-based) and KNN classifier using custom Word2Vec vectors trained on IMDb review corpus",
        "Trained Gensim Word2Vec model to represent semantic relationships specific to movie review vocabulary",
        "Used vectorized reviews to predict sentiment labels (positive/negative) with measurable accuracy",
        "Uncovered 78% alignment between textual sentiment polarity and user assigned ratings"
      ],
      technologies: ["Python", "Unsupervised Learning", "NLP", "VADER", "Gensim", "KNN (scikit-learn)"],
      github: "https://github.com/subhammoda/movie-review-sentimental-analysis"
    },
    {
      id: 7,
      title: "Personal Portfolio Website",
      image: "🌐",
      icon: "🌐",
      category: "Web Development | Personal Branding",
      description: "Designed and built a sleek, responsive portfolio to showcase my professional background in data engineering, data science, and AI. Developed using React and  PostCSS with the help of Cursor, an AI coding assistant that accelerated layout prototyping, component structuring, and Tailwind styling decisions.",
      features: [
        "Includes modular cards for About Me, Education, Work Experience, Projects, and Contact",
        "Built with React and PostCSS for responsive design",
        "Utilized Cursor for AI-assisted development, streamlining layout prototyping and component structuring",
        "Fully responsive across devices",
        "Fast builds using Vite and easy CI/CD deployment flow"
      ],
      technologies: ["React", "PostCSS", "Tailwind CSS", "Vite", "Cursor", "CI/CD", "gh-pages"],
      github: "https://github.com/subhammoda/subham-moda-portfolio"
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => {
      const next = prevIndex + cardsToShow;
      if (next >= projects.length) return 0;
      return next;
    });
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - cardsToShow;
      if (prev < 0) return (projects.length - (projects.length % cardsToShow || cardsToShow));
      return prev;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleProjects =
    currentIndex + cardsToShow <= projects.length
      ? projects.slice(currentIndex, currentIndex + cardsToShow)
      : [
          ...projects.slice(currentIndex),
          ...projects.slice(0, (currentIndex + cardsToShow) % projects.length),
        ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>🏁 Project Portfolio</h2>
        </div>

        <div className="projects-carousel-container">
          <div className="projects-carousel-wrapper">
            <div className="project-card-container">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  className="project-cards-grid"
                  custom={direction}
                  initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                  transition={{ duration: 0.5, type: 'tween' }}
                  style={{ display: 'grid', gridTemplateColumns: `repeat(${cardsToShow}, 1fr)`, gap: '2rem', width: '100%' }}
                >
                  {visibleProjects.map((project) => (
                    <div key={project.id} className="project-card-wrapper">
                      <div className="project-card card h-100" onClick={() => openModal(project)}>
                        <div className="project-image-container">
                          <div className="project-image">
                            <span className="project-image-emoji">{project.image}</span>
                          </div>
                        </div>
                        <div className="project-card-content">
                          <h4 className="project-title">{project.title}</h4>
                          <div className="project-category">
                            <span className="category-badge">{project.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {projects.length > cardsToShow && (
              <>
                <button 
                  className="carousel-arrow carousel-arrow-left" 
                  onClick={prevSlide}
                  aria-label="Previous project"
                >
                  ‹
                </button>
                <button 
                  className="carousel-arrow carousel-arrow-right" 
                  onClick={nextSlide}
                  aria-label="Next project"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {projects.length > cardsToShow && (
            <div className="project-indicators">
              {Array.from({ length: Math.ceil(projects.length / cardsToShow) }, (_, i) => (
                <button
                  key={i}
                  className={`project-indicator ${Math.floor(currentIndex / cardsToShow) === i ? 'active' : ''}`}
                  onClick={() => goToSlide(i * cardsToShow)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal}>×</button>
              
              <div className="modal-header">
                <div className="modal-header-left">
                  <div className="modal-project-icon">
                    <span className="icon-emoji">{selectedProject.icon}</span>
                  </div>
                  <h3 className="modal-project-title">{selectedProject.title}</h3>
                </div>
                <div className="modal-project-category">
                  <span className="category-badge">{selectedProject.category}</span>
                </div>
              </div>
              
              <div className="modal-content">
                <p className="modal-project-description">{selectedProject.description}</p>
                
                <div className="modal-project-features">
                  <h6 className="features-title">🏁 Key Features:</h6>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-project-technologies">
                  <h6 className="technologies-title">🔧 Technologies:</h6>
                  <div className="technology-tags">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: '1.5rem', display: 'inline-block' }}
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;