import { useState } from "react";
import uiLogo from "../../assets/uilogo.png";
import "./Navbar.css";

function Navbar({ sections, activeSection, darkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="header-inner">
        <a href="#home" className="logo" aria-label="Urban Interior home">
          <img src={uiLogo} alt="Urban Interior logo" className="logo-mark" />
          <span className="logo-text">
            <strong>Urban</strong>
            <span>Decorator</span>
          </span>
        </a>

        <nav
          id="main-navigation"
          className={`navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id} className="nav-item">
                <a
                  href={`#${section.id}`}
                  className={activeSection === section.id ? "active" : ""}
                  aria-current={activeSection === section.id ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
          >
            <span className="toggle-track">
              <span className="toggle-dot"></span>
            </span>
          </button>

          <a href="#contact" className="contact-button">
            Contact <span>→</span>
          </a>

          <button
            type="button"
            className={`burger ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;