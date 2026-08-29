import { useState } from "react";
import "./projects.css";

const projects = [
  {
    category: "Residential",
    title: "Skyline Residence",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Commercial",
    title: "The Westin Pune",
    image: "/images/the-westin-pune-koregaon.jpg",
  },
  {
    category: "Hospitality",
    title: "Westin Hotel Pune",
    image: "/images/westin.jpg",
  },
];

function Projects({ darkMode = true }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="page-section projects-section">
      <div className="section-heading center-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work shaped by context and craft.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedProject(project);
              }
            }}
          >
            <div className="project-info">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div
            className={`project-modal ${darkMode ? "dark" : "light"}`}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close project preview"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <div className="modal-copy">
              <span>{selectedProject.category}</span>
              <h3>{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
