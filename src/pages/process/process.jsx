import "./process.css";

const steps = [
  {
    index: "01",
    title: "Discovery",
    text: "We begin by understanding your lifestyle, goals, and the way your space needs to function daily.",
  },
  {
    index: "02",
    title: "Concept",
    text: "We translate ideas into moodboards, layouts, and design narratives rooted in material and spatial clarity.",
  },
  {
    index: "03",
    title: "Execution",
    text: "We coordinate materials, vendors, and detailing to protect the design language through every stage.",
  },
  {
    index: "04",
    title: "Styling",
    text: "The final layer brings warmth, texture, and authenticity so the room feels complete and elevated.",
  },
];

function Process() {
  return (
    <section id="process" className="page-section process-section">
      <div className="section-heading center-heading">
        <p className="eyebrow">Our process</p>
        <h2>A clear, collaborative journey from concept to completion.</h2>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <article className="process-step" key={step.index}>
            <span>{step.index}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;
