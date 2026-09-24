import { Routes, Route, Link } from 'react-router-dom'
import TasteLocal from './pages/TasteLocal'
import tasteLocalExperiences from './assets/tastelocal-experiences.png'
import './App.css'

function Home() {
  return (
    <div className="portfolio">
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Toh Rong Wei<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            <a
              href="/documents/Toh-Rong-Wei-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="nav-resume"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">FULL-STACK WEB DEVELOPER</p>

            <h1>
              Building practical
              <span> web applications.</span>
            </h1>

            <p className="hero-description">
              I build responsive full-stack applications using React,
              Django, REST APIs and modern web technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>

              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-code">
            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{' '}
                <span className="code-blue">developer</span> = {'{'}
              </p>

              <p className="code-indent">
                name: <span className="code-string">'Toh Rong Wei'</span>,
              </p>

              <p className="code-indent">
                role:{' '}
                <span className="code-string">
                  'Full-Stack Developer'
                </span>,
              </p>

              <p className="code-indent">
                frontend:{' '}
                <span className="code-string">'React'</span>,
              </p>

              <p className="code-indent">
                backend:{' '}
                <span className="code-string">'Django'</span>,
              </p>

              <p className="code-indent">
                learning:{' '}
                <span className="code-purple">true</span>
              </p>

              <p>{'}'}</p>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED PROJECTS
        ===================================================== */}
        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p>MY WORK</p>
            <h2>Featured Projects</h2>
            <span></span>
          </div>

          <div className="featured-project">
            {/* REAL TASTELOCAL SCREENSHOT */}
            <div className="project-preview">
              <div className="browser-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="project-real-preview">
                <img
                  src={tasteLocalExperiences}
                  alt="TasteLocal Where to Eat page"
                />
              </div>
            </div>

            {/* PROJECT INFORMATION */}
            <div className="project-information">
              <p className="project-number">
                FEATURED PROJECT / 01
              </p>

              <h3>TasteLocal</h3>

              <p className="project-subtitle">
                Local Food Tourism Platform
              </p>

              <p className="project-description">
                A full-stack web application designed to help visitors
                discover authentic Singapore food experiences while
                providing dedicated management tools for vendors and
                administrators.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Django</span>
                <span>REST API</span>
                <span>JWT</span>
                <span>SQLite</span>
                <span>Leaflet</span>
              </div>

              <div className="project-links">
                <Link to="/projects/tastelocal">
                  View Case Study →
                </Link>

                <a href="#github">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNICAL SKILLS
        ===================================================== */}
        <section className="skills-section" id="skills">
          <div className="section-heading">
            <p>TECHNOLOGIES</p>
            <h2>Technical Skills</h2>
            <span></span>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">&lt;/&gt;</div>

              <h3>Frontend</h3>

              <p>React</p>
              <p>JavaScript</p>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Vite</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">{'{ }'}</div>

              <h3>Backend</h3>

              <p>Python</p>
              <p>Django</p>
              <p>Django REST Framework</p>
              <p>REST APIs</p>
              <p>JWT Authentication</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">DB</div>

              <h3>Database</h3>

              <p>SQLite</p>
              <p>MySQL</p>
              <p>Database Design</p>
              <p>Data Management</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon">⚙</div>

              <h3>Development</h3>

              <p>Git</p>
              <p>GitHub</p>
              <p>VS Code</p>
              <p>Postman</p>
              <p>Responsive Design</p>
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}
        <section className="about-section" id="about">
          <div className="section-heading">
            <p>ABOUT</p>
            <h2>About Me</h2>
            <span></span>
          </div>

          <div className="about-content">
            <h3>
              Turning ideas into practical web applications.
            </h3>

            <p>
              I am a full-stack web developer with experience building
              applications using React, Django and REST APIs. I enjoy
              developing practical systems that combine clean user
              interfaces with reliable backend functionality.
            </p>

            <p>
              My projects have given me hands-on experience with
              authentication, role-based access, database management,
              API development and responsive frontend design.
            </p>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}
        <section className="contact-section" id="contact">
          <p>GET IN TOUCH</p>

          <h2>Let's build something useful.</h2>

          <p className="contact-description">
            I'm interested in opportunities where I can continue
            developing my full-stack development skills and contribute
            to real-world projects.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="btn btn-primary"
          >
            Contact Me
          </a>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer>
        <p>© 2026 Toh Rong Wei. Built with React.</p>
      </footer>
    </div>
  )
}

/* =========================================================
   ROUTES
========================================================= */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/projects/tastelocal"
        element={<TasteLocal />}
      />
    </Routes>
  )
}

export default App