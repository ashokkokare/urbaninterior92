import "./services.css";

const services = [
  {
    index: "01",
    title: "Interior Design",
    text: "Full-space concepts, material palettes, lighting studies, and bespoke styling for refined living.",
  },
  {
    index: "02",
    title: "Turnkey Execution",
    text: "End-to-end project management with procurement, installation, and finishing oversight from start to completion.",
  },
  {
    index: "03",
    title: "Commercial Spaces",
    text: "Workplaces and hospitality interiors designed around brand identity, user comfort, and productivity.",
  },
];

function Services() {
  return (
    <section id="services" className="page-section services-section">
      <div className="section-heading center-heading">
        <p className="eyebrow">Services</p>
        <h2>Designed around how you live and work.</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.index}>
            <span className="card-index">{service.index}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
