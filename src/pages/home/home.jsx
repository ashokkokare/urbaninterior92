import "./home.css";

function Home() {
  return (
    <section id="home" className="page-section hero-panel">
      <div className="hero-copy">
        <p className="eyebrow">Urban Interior Studio</p>
        <h1>Designing spaces that feel intentional, warm, and timeless.</h1>
        <p className="lead">
          We shape residential and commercial interiors with material-rich detail,
          thoughtful planning, and refined execution that feels personal from first
          sketch to final styling.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="primary-btn">Book a consultation</a>
          <a href="#projects" className="secondary-btn">View projects</a>
        </div>

        <div className="stats-grid">
          <div>
            <strong>12+</strong>
            <span>Years experience</span>
          </div>
          <div>
            <strong>140</strong>
            <span>Projects delivered</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>Client satisfaction</span>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-label="Interior design inspiration">
        <div className="visual-card main-card"></div>
        <div className="visual-card accent-card"></div>
        <div className="floating-note">
          <span>Featured project</span>
          <strong>Westin Hotel</strong>
        </div>
      </div>
    </section>
  );
}

export default Home;