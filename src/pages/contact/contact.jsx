import "./contact.css";

const contactEmail = "urban.interior92@gmail.com";
const whatsappUrl =
  "https://wa.me/918390347021?text=Hi%20Urban%20Decorator%2C%20I%27d%20like%20to%20discuss%20an%20interior%20design%20project.";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const project = formData.get("project");
    const subject = `Interior design enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nProject details:\n${project}`;
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="page-section contact-section">
      <div className="contact-intro">
        <p className="eyebrow">Start a conversation</p>
        <h2>Let’s make a space that feels like you.</h2>
        <p className="contact-copy">
          Tell us what you have in mind. Reach us directly or send a few details
          about your project and we’ll take it from there.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-options">
          <p className="contact-label">Choose how you’d like to connect</p>

          <a
            className="contact-card whatsapp-card"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Urban Decorator on WhatsApp"
          >
            <span className="contact-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 11.5a8 8 0 0 1-11.85 7L4 20l1.4-4.02A8 8 0 1 1 20 11.5Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 8.5c.2-.45.4-.46.68-.47h.58c.18 0 .35.05.47.36l.7 1.68c.08.2.04.38-.1.55l-.5.6c-.14.16-.16.32-.04.5.4.65.96 1.2 1.62 1.6.2.13.37.1.52-.07l.63-.73c.16-.18.34-.22.55-.13l1.6.75c.24.11.34.25.32.46-.03.42-.23 1.03-.66 1.4-.45.4-1.04.61-1.65.55-1-.1-2.32-.75-3.5-1.8-1.35-1.2-2.14-2.66-2.25-3.6-.09-.7.25-1.3.63-1.65Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="contact-card-copy">
              <span className="contact-card-label">Quickest response</span>
              <strong>Chat on WhatsApp</strong>
              <span>+91 83903 47021</span>
            </span>
            <span className="contact-card-arrow" aria-hidden="true">↗</span>
          </a>

          <a
            className="contact-card email-card"
            href={`mailto:${contactEmail}?subject=${encodeURIComponent("Interior design enquiry")}`}
            aria-label={`Email Urban Decorator at ${contactEmail}`}
          >
            <span className="contact-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="3.5"
                  y="5.5"
                  width="17"
                  height="13"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="m5 7 7 5.5L19 7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="contact-card-copy">
              <span className="contact-card-label">For project details</span>
              <strong>Send us an email</strong>
              <span>{contactEmail}</span>
            </span>
            <span className="contact-card-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <p className="eyebrow">A few details</p>
            <h3>Tell us about your project</h3>
          </div>

          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ashok Karande"
            required
          />

          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="contact-project">What would you like to create?</label>
          <textarea
            id="contact-project"
            name="project"
            rows="4"
            placeholder="A little about the space, your ideas, or your timeline..."
            required
          />

          <button type="submit" className="contact-submit">
            Send project enquiry <span aria-hidden="true">→</span>
          </button>
          <p className="contact-form-note">
            This opens your email app with your message ready to send.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
