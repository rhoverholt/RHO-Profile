function ContactMe() {
  return (
    <section id="contact-me">
      <h1 className="section-title">Contact Me</h1>

      <div className="section-details" id="contact-info">
        <div className="contact-email">
          <a className="my-link" href="mailto:rhocoding@gmail.com" alt="E-Mail">
            rhocoding@gmail.com
          </a>
        </div>

        <div className="contact-github">
          <a
            className="my-link"
            href="https://github.com/rhoverholt"
            alt="Git Hub URL"
          >
            GitHub
          </a>
        </div>

        <div className="contact-linkedin">
          <a
            className="my-link"
            href="https://www.linkedin.com/in/richardoverholt/"
            alt="LinkedIn URL"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
