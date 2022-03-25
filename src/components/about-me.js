import resume from "./../images/RHO-Resume.pdf";

function AboutMe() {
  return (
    <section id="about-me">
      <h1 className="section-title">About Me</h1>

      <div className="section-details">
        <p>- 13 years IT experience, 1992-2015</p>
        <p>
          - Currently enrolled in a "Full-Stack Web Development" bootcamp
          through GA Tech
        </p>
        <p>- BA/BSE Mathematics/Computer Science University of Pennsylvania</p>
        <p>
          - Strong SQL/Database background from a consulting and eventual IT
          management career
        </p>
        <p>- Looking for part-time, programming work</p>
        <p>
          -{" "}
          <a className="my-link" href={resume}>
            Click here to view my resume
          </a>
        </p>
      </div>
    </section>
  );
}
export default AboutMe;
