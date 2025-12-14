import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<
    "opening" | "about" | "portfolio"
  >("opening");
  const [coins, setCoins] = useState(9999);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const experiences = [
    {
      title: "CBL Offset ERP System",
      description:
        "Built a comprehensive ERP system for printing manufacturer, including maintenance, quality control, shipping, production, PPIC(Production, Planning, and Inventory Control), inventory, sales, marketing, hr, and finance modules",
      tech: [
        "React JS",
        "REST API",
        "TypeScript",
        "Tailwind CSS",
        "React DnD",
        "ReCharts",
        "Axios",
        "Responsive Design",
      ],
      difficulty: "★★★★★",
      status: "in-progress" as const,
    },
    {
      title: "Dashboard Analytics PLN UPT Bekasi",
      description:
        "Created real-time data visualization dashboard, connected with REST APIs & Google Sheets data sources",
      tech: [
        "React",
        "Chart.js",
        "REST API",
        "Material-UI",
        "Axios",
        "Responsive Design",
        "TypeScript",
        "Vite",
        "Google Sheets API",
      ],
      difficulty: "★★★★☆",
      status: "completed" as const,
    },
    {
      title: "Let This Book Be Your Public Space",
      description:
        "A community platform for sharing photos and locations with community members",
      tech: ["React JS", "Vite", "REST API", "Responsive Design", "TypeScript"],
      difficulty: "★★★☆☆",
      status: "completed" as const,
      link: "letthisbookbeyourpublicspace.com",
    },
    {
      title: "Mak Ute Cafe & Resto",
      description:
        "A catalog website for a restaurant and cafe located in Sijuk, Belitung. Features highlight menu photos, activities, and events held at the restaurant",
      tech: ["Next JS", "Vite", "Responsive Design", "TypeScript"],
      difficulty: "★★★☆☆",
      status: "completed" as const,
    },
    {
      title: "ORNATREDEC",
      description:
        "A forum and e-commerce website themed around ornamental plants and fish. Features Q&A forum for community, guidelines for caring for fish and ornamental plants. Served as project supervisor",
      tech: ["Git", "Trello", "Project Management"],
      difficulty: "★★★★☆",
      status: "completed" as const,
    },
    {
      title: "KerupukKeluarga",
      description:
        "A catalog website for a souvenir shop featuring various types of souvenirs including fish crackers, honey, and traditional Belitung spices. The website supports real-time language switching between Indonesian, English, and Mandarin",
      tech: ["React JS", "Vite", "TypeScript", "i18n", "Responsive Design"],
      difficulty: "★★★☆☆",
      status: "completed" as const,
    },
    {
      title: "Ibadahku",
      description:
        "A prototype website where Umrah pilgrims can search and book Umrah packages provided by travel agents",
      tech: ["Next JS", "JavaScript", "Firebase"],
      difficulty: "★★★☆☆",
      status: "completed" as const,
    },
  ];
  const typewriterText = "PRESS START TO BEGIN YOUR ADVENTURE...";

  useEffect(() => {
    if (currentSection === "opening") {
      setIsTyping(true);
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(typewriterText.slice(0, index));
        index++;
        if (index > typewriterText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [currentSection]);

  const renderOpening = () => (
    <div className="opening-section pixel-box">
      <div className="pixel-border">
        <div className="game-header">
          <div className="life-bar">
            <span className="label">HP</span>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div className="coin-counter">
            <span className="coin-icon">●</span>
            <span className="coin-value">{coins}</span>
          </div>
        </div>

        <div className="title-screen">
          <div className="pixel-stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>

          <div className="glitch-wrapper">
            <h1 className="pixel-text glitch" data-text="MUHAMMAD AULIA RAHMAN">
              MUHAMMAD AULIA RAHMAN
            </h1>
          </div>

          <p className="pixel-subtitle">
            <span className="bracket">{"<"}</span>
            S.Kom.
            <span className="bracket">{">"}</span>
          </p>

          <div className="job-badge">
            <div className="badge-corner tl"></div>
            <div className="badge-corner tr"></div>
            <div className="badge-corner bl"></div>
            <div className="badge-corner br"></div>
            <p className="pixel-job-title">REACT FRONT-END DEVELOPER</p>
          </div>

          <div className="experience-display">
            <div className="exp-box">
              <span className="exp-label">LEVEL</span>
              <span className="exp-value">SENIOR</span>
            </div>
            <div className="exp-divider">×</div>
            <div className="exp-box">
              <span className="exp-label">EXP</span>
              <span className="exp-value">2.5 YRS</span>
            </div>
          </div>

          <div className="pixel-stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
        </div>

        <div className="typewriter-container">
          <p className="typewriter-text">
            {displayText}
            {isTyping && <span className="cursor-blink">_</span>}
          </p>
        </div>

        <button
          className="pixel-button start-button"
          onClick={() => {
            setCoins(coins + 100);
            setCurrentSection("about");
          }}
        >
          <span className="button-icon">▶</span> START GAME
        </button>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="about-section pixel-box">
      <div className="pixel-border">
        <div className="game-hud">
          <div className="hud-item">
            <span className="hud-label">STAGE</span>
            <span className="hud-value">1-1</span>
          </div>
          <div className="hud-item">
            <span className="coin-icon">●</span>
            <span className="hud-value">{coins}</span>
          </div>
        </div>

        <h2 className="section-title">
          <span className="title-icon">▼</span> CHARACTER INFO{" "}
          <span className="title-icon">▼</span>
        </h2>

        <div className="about-content">
          <div className="character-card">
            <div className="card-frame">
              <div className="pixel-avatar">
                <div className="avatar-pixel-art">
                  {/* 8-bit style avatar representation */}
                  <div className="pixel-row">
                    <span></span>
                    <span></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="pixel-row">
                    <span></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span></span>
                  </div>
                  <div className="pixel-row">
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="e"></span>
                    <span className="p"></span>
                    <span className="e"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                  </div>
                  <div className="pixel-row">
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                  </div>
                  <div className="pixel-row">
                    <span></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span className="p"></span>
                    <span></span>
                  </div>
                  <div className="pixel-row">
                    <span></span>
                    <span></span>
                    <span className="p"></span>
                    <span></span>
                    <span className="p"></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className="character-name">MUHAMMAD AULIA RAHMAN</div>

              <div className="stats-container">
                <div className="stat-row">
                  <span className="stat-label">ATK:</span>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="stat-row">
                  <span className="stat-label">DEF:</span>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: "88%" }}></div>
                  </div>
                </div>
                <div className="stat-row">
                  <span className="stat-label">SPD:</span>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="info-panel">
            <div className="message-box">
              <div className="message-header">
                <span className="msg-icon">💬</span> ABOUT
              </div>
              <div className="message-content">
                <p className="dialog-text">
                  → Passionate Front-End Developer specializing in React
                  ecosystem
                </p>
                <p className="dialog-text">
                  → Building responsive and performant web applications
                </p>
                <p className="dialog-text">
                  → Strong foundation in modern JavaScript and TypeScript
                </p>
              </div>
            </div>

            <div className="skills-panel">
              <div className="panel-header">
                <span className="panel-icon">⚡</span> SKILL SET
              </div>
              <div className="skills-grid">
                {[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "Vite",
                  "Next.js",
                  "Axios",
                  "HTML/CSS",
                  "REST API",
                  "Git",
                  "Responsive",
                ].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-bullet">▸</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button
            className="pixel-button nav-button"
            onClick={() => setCurrentSection("opening")}
          >
            <span className="button-icon">◄</span> BACK
          </button>
          <button
            className="pixel-button nav-button primary"
            onClick={() => {
              setCoins(coins + 150);
              setCurrentSection("portfolio");
            }}
          >
            CONTINUE <span className="button-icon">►</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="portfolio-section pixel-box">
      <div className="pixel-border">
        <div className="game-hud">
          <div className="hud-item">
            <span className="hud-label">STAGE</span>
            <span className="hud-value">1-2</span>
          </div>
          <div className="hud-item">
            <span className="coin-icon">●</span>
            <span className="hud-value">{coins}</span>
          </div>
        </div>

        <h2 className="section-title">
          <span className="title-icon">▼</span> QUEST LOG{" "}
          <span className="title-icon">▼</span>
        </h2>

        <div className="quest-intro">
          <p className="quest-text">Completed Missions & Adventures</p>
        </div>

        <div className="projects-grid">
          {experiences.map((project, index) => (
            <div key={index} className="quest-card">
              <div className="quest-header">
                <div className="quest-number">
                  <span className="number-label">QUEST</span>
                  <span className="number-value">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="quest-difficulty">{project.difficulty}</div>
              </div>

              <h3 className="quest-title">
                <span className="title-marker">»</span> {project.title}
              </h3>

              <p className="quest-description">{project.description}</p>

              <div className="quest-rewards">
                <div className="reward-header">
                  <span className="reward-icon">🎁</span> TECH STACK
                </div>
                <div className="tech-list">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      <span className="badge-dot">●</span> {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="quest-status">
                <span className={`status-badge ${project.status}`}>
                  {project.status === "completed"
                    ? "✓ COMPLETED"
                    : "⚡ IN PROGRESS"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="completion-message">
          <div className="message-border">
            <p className="completion-text">
              <span className="completion-icon">★</span> ALL QUESTS CLEARED!{" "}
              <span className="completion-icon">★</span>
            </p>
            <p className="completion-subtext">+{coins} COINS EARNED</p>
          </div>
        </div>

        <div className="button-group">
          <button
            className="pixel-button nav-button"
            onClick={() => setCurrentSection("about")}
          >
            <span className="button-icon">◄</span> BACK
          </button>
          <button
            className="pixel-button nav-button"
            onClick={() => {
              setCoins(9999);
              setCurrentSection("opening");
            }}
          >
            <span className="button-icon">↻</span> RESTART
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="homepage-container">
      <div className="stars-background"></div>
      <div className="scanlines"></div>

      <div className="content-wrapper">
        {currentSection === "opening" && renderOpening()}
        {currentSection === "about" && renderAbout()}
        {currentSection === "portfolio" && renderPortfolio()}
      </div>

      <footer className="pixel-footer">
        <p>
          <span className="footer-icon">♦</span>© 2025 MUHAMMAD AULIA RAHMAN
          <span className="footer-icon">♦</span>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
