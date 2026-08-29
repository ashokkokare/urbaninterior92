import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Services from "./pages/services/services";
import Process from "./pages/process/process";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import "./App.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  useEffect(() => {
    const sectionNodes = sections.map(({ id }) => document.getElementById(id)).filter(Boolean);

    if (!sectionNodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        threshold: [0.15, 0.35, 0.65],
        rootMargin: "-12% 0px -30% 0px",
      }
    );

    sectionNodes.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`app-shell ${darkMode ? "dark" : "light"}`}>
      <CustomCursor />
      <Navbar sections={sections} activeSection={activeSection} darkMode={darkMode} onToggleTheme={toggleTheme} />

      <main className="page-shell">
        <Home />
        <AboutUs />
        <Services />
        <Process />
        <Projects darkMode={darkMode} />
        <Contact />
      </main>
    </div>
  );
}

export default App;