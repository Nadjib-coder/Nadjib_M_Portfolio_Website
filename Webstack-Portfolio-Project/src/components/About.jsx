export default function About() {
  return (
    <>
      <section id="about" className="about-us-content about">
        <div className="container">
          <img
            className="personal-image"
            src="/assets/me.jpg"
            alt="Nadjib Mouhoun"
          />
          <div className="content">
            <h1>About Me</h1>
            <p>
              Hello, I am Nadjib Mouhoun, a dedicated Automation and Software
              Engineer
              <br />
              <br />
              Currently enrolled in a Masters program in Creative Computing and
              Artificial Intelligence at IADE - Faculty of Design, Technology
              and Communication in Lisbon,
              <br />
              <br />
              I am passionate about leveraging technology to create innovative
              solutions. I am a proactive problem solver with a strong
              analytical mindset, adept at tackling complex challenges.
              Committed to continuous learning, I also excel as a leader with
              strong leadership skills.
              <br />
            </p>
            <a className="cv" href="/cv/Resume.pdf" download>
              <p>Download CV</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
