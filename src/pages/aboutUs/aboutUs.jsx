import "./aboutUs.css";

function AboutUs() {
  return (
    <section id="about" className="page-section about-section">
      <div className="section-heading">
        <p className="eyebrow">About us</p>
        <h2>We create elevated living for modern lifestyles.</h2>
      </div>

      <div className="about-grid">
        <div className="about-image"></div>

        <div className="about-copy">
          <p>
            Every project starts with listening closely. We balance lifestyle,
            architecture, and atmosphere to develop interiors that are functional,
            expressive, and deeply considered.
          </p>
          <p>
            From bespoke custom joinery to curated material palettes, we design spaces
            that help people feel at ease while still making a bold statement.
          </p>
          <ul className="check-list">
            <li>Residential and commercial interior design</li>
            <li>Turnkey project coordination and styling</li>
            <li>Material, lighting, and furniture curation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;