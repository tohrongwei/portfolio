import { Link } from 'react-router-dom'

import tasteLocalExperiences from '../assets/tastelocal-experiences.png'
import tasteLocalDetails from '../assets/tastelocal-details.png'
import tasteLocalVendor from '../assets/tastelocal-vendor.png'
import tasteLocalAdmin from '../assets/tastelocal-admin.png'

function ProjectScreenshot({
  image,
  title,
  number,
  description,
  alt,
}) {
  return (
    <div className="case-showcase">
      <div className="case-screenshot">
        <div className="case-browser-bar">
          <div className="browser-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="browser-address">
            TasteLocal — {title}
          </div>
        </div>

        <img src={image} alt={alt} />
      </div>

      <div className="screenshot-caption">
        <span>{number}</span>

        <div>
          <h3>{title}</h3>

          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

function TasteLocal() {
  return (
    <div className="case-study">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="case-hero">
        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>

        <p className="case-label">
          FULL-STACK PROJECT
        </p>

        <h1>TasteLocal</h1>

        <h2>Local Food Tourism Platform</h2>

        <p className="case-intro">
          A full-stack web application designed to help visitors
          discover authentic local food experiences in Singapore,
          while providing dedicated management tools for vendors
          and administrators.
        </p>

        <div className="project-tags">
          <span>React</span>
          <span>Django</span>
          <span>Django REST Framework</span>
          <span>JWT</span>
          <span>SQLite</span>
          <span>Leaflet</span>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}
      <section className="case-section">
        <p className="case-section-label">
          01 / OVERVIEW
        </p>

        <h2>Project Overview</h2>

        <p>
          TasteLocal was developed as a local food tourism platform
          that connects tourists with food vendors and authentic
          Singapore food experiences.
        </p>

        <p>
          The application combines a React frontend with a Django
          REST Framework backend and provides different functionality
          depending on whether the user is a tourist, vendor or
          administrator.
        </p>
      </section>

      {/* =====================================================
          USER ROLES
      ===================================================== */}
      <section className="case-section">
        <p className="case-section-label">
          02 / USER ROLES
        </p>

        <h2>Three User Experiences</h2>

        <div className="case-role-grid">
          <div className="case-role-card">
            <span>01</span>

            <h3>Tourist</h3>

            <p>
              Discover local food experiences, view experience
              information, make bookings, manage bookings, build
              food itineraries and submit reviews.
            </p>
          </div>

          <div className="case-role-card">
            <span>02</span>

            <h3>Vendor</h3>

            <p>
              Create and manage food experiences, monitor customer
              bookings and update booking statuses through a
              dedicated vendor dashboard.
            </p>
          </div>

          <div className="case-role-card">
            <span>03</span>

            <h3>Administrator</h3>

            <p>
              Manage vendors, experiences, bookings and other
              administrative areas of the TasteLocal platform.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section className="case-section">
        <p className="case-section-label">
          03 / FEATURES
        </p>

        <h2>Key Features</h2>

        <div className="feature-list">
          <div>
            <strong>Authentication</strong>

            <p>
              JWT-based authentication manages secure user login
              and authenticated API requests.
            </p>
          </div>

          <div>
            <strong>Role-Based Access</strong>

            <p>
              Protected React routes provide separate interfaces
              for tourists, vendors and administrators.
            </p>
          </div>

          <div>
            <strong>Food Discovery</strong>

            <p>
              Visitors can browse and filter local food experiences
              using categories, locations, food types and other
              search criteria.
            </p>
          </div>

          <div>
            <strong>Booking Management</strong>

            <p>
              Tourists can make bookings while vendors can manage
              customer bookings and update their status.
            </p>
          </div>

          <div>
            <strong>Vendor Management</strong>

            <p>
              Vendors can create, edit and deactivate their food
              experiences through dedicated management interfaces.
            </p>
          </div>

          <div>
            <strong>Reviews</strong>

            <p>
              Customers can submit reviews after eligible completed
              food experience bookings.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ===================================================== */}
      <section className="case-section">
        <p className="case-section-label">
          04 / ARCHITECTURE
        </p>

        <h2>Application Architecture</h2>

        <p>
          TasteLocal separates the frontend user interface from
          backend business logic through a REST API architecture.
        </p>

        <div className="architecture">
          <div>
            <span>Frontend</span>
            <strong>React</strong>
          </div>

          <span>→</span>

          <div>
            <span>API</span>
            <strong>Django REST</strong>
          </div>

          <span>→</span>

          <div>
            <span>Backend</span>
            <strong>Django</strong>
          </div>

          <span>→</span>

          <div>
            <span>Database</span>
            <strong>SQLite</strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATION
      ===================================================== */}
      <section className="case-section case-coming">
        <p className="case-section-label">
          05 / APPLICATION
        </p>

        <h2>Application Walkthrough</h2>

        <p>
          Selected screens demonstrate the main user journeys and
          role-based functionality implemented across TasteLocal.
        </p>

        {/* SCREENSHOT 01 */}
        <ProjectScreenshot
          image={tasteLocalExperiences}
          number="01"
          title="Food Discovery"
          alt="TasteLocal Where to Eat food discovery page"
          description="The Where to Eat interface allows visitors to discover Singapore food experiences using search, categories, location, pricing and other filtering options."
        />

        {/* SCREENSHOT 02 */}
        <ProjectScreenshot
          image={tasteLocalDetails}
          number="02"
          title="Experience Details"
          alt="TasteLocal food experience details page"
          description="Visitors can view detailed information about a food experience, including the vendor, location, price and experience information before adding it to their planner or making a reservation."
        />

        {/* SCREENSHOT 03 */}
        <ProjectScreenshot
          image={tasteLocalVendor}
          number="03"
          title="Vendor Dashboard"
          alt="TasteLocal vendor dashboard"
          description="The vendor dashboard provides a dedicated workspace for managing food experiences and customer bookings while giving vendors a quick overview of their activity."
        />

        {/* SCREENSHOT 04 */}
        <ProjectScreenshot
          image={tasteLocalAdmin}
          number="04"
          title="Admin Dashboard"
          alt="TasteLocal administrator dashboard"
          description="The administrator interface provides platform-level management of vendors, food experiences and bookings through a separate protected role."
        />
      </section>

      {/* =====================================================
          TECHNICAL IMPLEMENTATION
      ===================================================== */}
      <section className="case-section">
        <p className="case-section-label">
          06 / TECHNICAL IMPLEMENTATION
        </p>

        <h2>Full-Stack Integration</h2>

        <p>
          The React frontend communicates with Django REST Framework
          endpoints to retrieve and update application data.
          Authentication tokens are used for protected operations,
          while role information determines which interfaces and
          actions are available to each user.
        </p>

        <p>
          The project includes APIs for users, food experiences,
          vendors, bookings and reviews, allowing the frontend and
          backend to remain clearly separated.
        </p>
      </section>

      {/* =====================================================
          CHALLENGES
      ===================================================== */}
      <section className="case-section">
        <p className="case-section-label">
          07 / CHALLENGES
        </p>

        <h2>Challenges & Solutions</h2>

        <div className="feature-list">
          <div>
            <strong>Role-Based Navigation</strong>

            <p>
              Different users required different pages and
              navigation. Role information returned by the backend
              is used with protected React routes to direct users
              to the correct interface.
            </p>
          </div>

          <div>
            <strong>Booking Workflow</strong>

            <p>
              Booking status transitions are controlled so vendors
              can confirm, cancel or complete bookings through the
              appropriate workflow.
            </p>
          </div>

          <div>
            <strong>Frontend & Backend Integration</strong>

            <p>
              React components communicate with Django REST API
              endpoints using authenticated requests while keeping
              frontend presentation separate from backend logic.
            </p>
          </div>

          <div>
            <strong>Experience Management</strong>

            <p>
              Vendor-specific API endpoints allow authenticated
              vendors to create, update and deactivate their own
              food experiences.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT I LEARNED
      ===================================================== */}
      <section className="case-section">
        <p className="case-section-label">
          08 / WHAT I LEARNED
        </p>

        <h2>What I Learned</h2>

        <p>
          Developing TasteLocal provided practical experience in
          designing and integrating a complete full-stack application.
          The project strengthened my understanding of React component
          development, Django REST APIs, authentication, role-based
          authorization, database relationships and frontend/backend
          integration.
        </p>

        <p>
          It also provided experience in planning user workflows,
          debugging API interactions and designing interfaces for
          multiple types of users within the same application.
        </p>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <section className="case-footer">
        <Link to="/">
          ← Back to Portfolio
        </Link>
      </section>
    </div>
  )
}

export default TasteLocal