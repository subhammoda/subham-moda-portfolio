import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

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
      image: `${import.meta.env.BASE_URL}story-bot-ELI5.png`,
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
      image: `${import.meta.env.BASE_URL}StockAnalysisPackage.png`,
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
      image: `${import.meta.env.BASE_URL}olist-data-pipeline.png`,
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
      image: `${import.meta.env.BASE_URL}yelp-reviews-analysis.png`,
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
      image: `${import.meta.env.BASE_URL}imdb-user-reviews-scraper.png`,
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
      image: `${import.meta.env.BASE_URL}movie-review-sentimental-analysis.png`,
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
      image: `${import.meta.env.BASE_URL}subham-moda-portfolio.png`,
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
    },
    {
      id: 8,
      title: "Netflix Data Visualization",
      image: `${import.meta.env.BASE_URL}NetflixVisualization.png`,
      icon: "📺",
      category: "Data Visualization | Tableau",
      description: "Performed exploratory data analysis and developed a Tableau dashboard to visualize global trends in Netflix content. The project identifies patterns in movie and TV show releases, content types, genres, and country-wise production volumes to uncover strategic streaming insights.",
      features: [
        "Cleaned and explored Netflix's content catalog by genre, type, release date, and country",
        "Visualized Netflix's country wise content distribution and localization trends",
        "Compared frequency of genres and content split between movies and TV shows",
        "Performed Temporal Analysis to understand how content releases have evolved over the years",
        "Combined Python-based EDA with BI tools to create an end-to-end analytical pipeline"
      ],
      technologies: ["Tableau", "Data Analysis"],
      github: "https://github.com/subhammoda/NetflixVisualization"
    },
    {
      id: 9,
      title: "Natural Language Analytics Dashboard",
      image: `${import.meta.env.BASE_URL}natural-language-analytics-dashboard.png`,
      icon: "📊",
      category: "Data Visualization | LLM Applications",
      description: "Built an LLM-powered analytics dashboard that enables non-technical users to generate charts and insights from structured data using natural language prompts. The tool accepts CSV/Excel uploads, interprets the user's intent, and returns visualizations and summaries, dramatically reducing the time required for analysis.",
      features: [
        "Accepts human language queries like “Show total sales by region” to generate relevant plots",
        "Uses Gemini API to interpret user prompts and generate visualizations",
        "Provides interactive charts and summaries for easy data exploration",
        "Empowers non-technical stakeholders to perform data exploration without coding",
        "Reduces visualization time from ~10 minutes to under 10 seconds per query"
      ],
      technologies: ["Python", "Streamlit", "Pandas", "Plotly", "Google Gemini API"],
      github: "https://github.com/subhammoda/natural-language-analytics-dashboard"
    },
    {
      id: 10,
      title: "ML Analysis Tool",
      image: `${import.meta.env.BASE_URL}ml-analysis-tool.png`,
      icon: "🤖",
      category: "Machine Learning | LLM Applications",
      description: "Built an interactive machine learning assistant that automates model training and provides LLM-generated recommendations. Users upload a dataset, select the target column, and the tool handles preprocessing, model selection, evaluation, and returns tailored advice for improvement using Gemini.",
      features: [
        "Automatically detects whether the task is classification or regression and trains multiple models", 
        "Compares performance metrics and surfaces the best model with accuracy, confusion matrix, etc.",
        "Sends dataset metadata and model summary to Gemini LLM for feedback",
        "LLM provides tailored suggestions for improving model performance, feature engineering, and data collection"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Gemini API (LLM)", "Matplotlib", "Plotly"],
      github: "https://github.com/subhammoda/ml-analysis-tool"
    },
    {
      id: 11,
      title: "Story Bot ELI5 - Langchain",
      image: `${import.meta.env.BASE_URL}story-bot-ELI5-langchain.png`,
      icon: "🧠",
      category: "AI | ML | Langchain",
      description: "Developed an intelligent storytelling bot that simplifies complex topics into engaging, age-appropriate stories. Leveraging LangChain and multi-agent architecture, the system automates topic research, summarization, and story generation using Gemini LLM. The app supports adjustable age targeting and a language simplicity toggle for wider accessibility.",
      features: [
        "Combines LangChain's retrieval and prompt templating with Gemini's LLM to generate topic-specific explanations",
        "Dynamically adapts tone and vocabulary based on selected age group",
        "Allows users to choose between standard or extra-simplified storytelling modes"
      ],
      technologies: ["Python", "LangChain", "Gemini API (LLM)", "Streamlit"],
      github: "https://github.com/subhammoda/story-bot-ELI5-Langchain"
    },
    {
      id: 12,
      title: "Electricity Production Time Series Analysis",
      image: `${import.meta.env.BASE_URL}ElectricityProductionTimeSeries.png`,
      icon: "⚡",
      category: "Time Series Analysis | Forecasting",
      description: "Built a time series forecasting model to predict future electricity production in the U.S. using historical data. Applied ARIMA and seasonal decomposition techniques in R to model trend and seasonality, with accurate multi-year forecasts and performance evaluation.",
      features: [
        "Implemented SARIMA models to capture seasonality, trend, and noise",
        "Used additive and logarithmic decomposition to analyze seasonal trend, and residual components",
        "Produced line charts and confidence intervals using ggplot2 for visual storytelling",
        "Predicted an 8% increase in electricity production"
      ],
      technologies: ["R", "SARIMA","forecast", "tseries", "ggplot2"],
      github: "https://github.com/subhammoda/ElectricityProductionTimeSeries"
    },
    {
      id: 13,
      title: "Car Sales Time Series Forecasting",
      image: `${import.meta.env.BASE_URL}CarSalesTimeSeries.png`,
      icon: "🚗",
      category: "R | Forecasting",
      description: "Built a time series forecasting model to predict monthly U.S. car sales using classical statistical methods. Applied the Box-Jenkins methodology for model selection and validation, enabling accurate forecasts with interpretable seasonal and trend components.",
      features: [
        "Followed the Box-Jenkins iterative cycle: stationarity, model estimation, parameter redundancy, parameter estimation, residual analysis, and forecasting",
        "Conducted Augmented Dickey-Fuller test and used differencing for non-stationary series",
        "Evaluated residuals, AIC, and BIC to validate forecast quality"
      ],
      technologies: ["R", "ARIMA", "forecast", "tseries", "ggplot2"],
      github: "https://github.com/subhammoda/CarSalesTimeSeries"
    },
    {
      id: 14,
      title: "Automobile Price Prediction using Statistical Methods",
      image: `${import.meta.env.BASE_URL}AutomobilePricePrediction.png`,
      icon: "🚙",
      category: "Statistical Analysis | Regression",
      description: "A comprehensive statistical modeling project designed to predict automobile prices using the 1985 Ward's Automotive dataset. This project combines classical statistical tests with advanced regression and regularization techniques to uncover insights and build predictive models. Emphasis was placed on applying concepts learned in the Statistical Methods course.",
      features: [
        "Statistical analysis: Shapiro-Wilk test and multivariate normality, Z-test, ANOVA, Chi-Square test, Krushal-Wallis test",
        "Regression Techniques Implemented: Linear Regression with full feature set, Forward and Backward Feature Selection, Ridge Regression for multicollinearity control, Polynomial Regression to explore non-linearity, Principal Component Regression for dimensionality reduction",
        "Model Evaluation: R-squared, RMSE, MAPE",
        "Identified best model as Foraward-selected Linear Regression with 15 features"
      ],
      technologies: ["Python", "plotly", "scikit-learn", "pandas", "numpy", "stats"],
      github: "https://github.com/subhammoda/AutomobilePricePrediction"
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

  function ContinuousAutoplay(
    slider,
    {
      speed = 0.0015,
      pauseOnHoverSelector = ".keen-slider",
      pauseOnClickSelector = ".keen-slider",
    } = {}
  ) {
    let rafId;
    let currentTranslate = 0;
    let paused = false;
  
    const animate = () => {
      if (!paused) {
        currentTranslate += speed;
        slider.track.to(currentTranslate);
      }
      rafId = requestAnimationFrame(animate);
    };
  
    slider.on("created", () => {
      animate();
  
      // Pause on hover
      if (pauseOnHoverSelector) {
        const hoverEl = document.querySelector(pauseOnHoverSelector);
        if (hoverEl) {
          hoverEl.addEventListener("mouseenter", () => (paused = true));
          hoverEl.addEventListener("mouseleave", () => (paused = false));
        }
      }
  
      // Pause on click
      if (pauseOnClickSelector) {
        const clickEl = document.querySelector(pauseOnClickSelector);
        if (clickEl) {
          clickEl.addEventListener("mousedown", () => (paused = true));
          clickEl.addEventListener("mouseup", () => (paused = false));
        }
      }
    });
  
    slider.on("destroyed", () => {
      cancelAnimationFrame(rafId);
    });
  }
  
  const visibleProjects =
    currentIndex + cardsToShow <= projects.length
      ? projects.slice(currentIndex, currentIndex + cardsToShow)
      : [
          ...projects.slice(currentIndex),
          ...projects.slice(0, (currentIndex + cardsToShow) % projects.length),
        ];

  // Keen-slider setup for infinite carousel
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    renderMode: "performance",
    slides: { perView: 3, spacing: 32 },
    breakpoints: {
      '(max-width: 1200px)': { perView: 1.2, spacing: 0 },
      '(max-width: 768px)': { perView: 1.05, spacing: 0 },
    },
    drag: true,
    centered: true,
  },
  [ContinuousAutoplay]
  );

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>🏁 Project Portfolio</h2>
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

        {/* Infinite Project Carousel (images + titles only) */}
        <div style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          padding: '3rem 0',
          background: 'transparent',
          boxSizing: 'border-box',
        }}>
          <div ref={sliderRef} className="keen-slider" id="project-carousel" style={{ width: '100%', boxSizing: 'border-box' }}>
            {projects.map((project, idx) => (
              <div className="keen-slider__slide" key={project.id} style={{ padding: 0, textAlign: 'center', cursor: 'pointer' }} onClick={() => openModal(project)}>
                <img src={project.image} alt={project.title} style={{ width: '100%', maxWidth: 480, objectFit: 'cover', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', display: 'block' }} />
                <div style={{ marginTop: 12, fontWeight: 600, fontSize: 18 }}>{project.title}</div>
              </div>
            ))}
          </div>
        </div>
        {/* End Infinite Project Carousel */}
      </div>
    </section>
  );
};

export default Projects;