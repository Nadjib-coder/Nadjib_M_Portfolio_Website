export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99579.41434377714!2d-9.242139349748724!3d38.74405052516278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa!5e0!3m2!1spt-PT!2spt!4v1736439510234!5m2!1spt-PT!2spt"
          width={700}
          height={330}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
        <div className="content">
          <div>
            <i className="fas fa-home" />
            <h4>Lisbon, Portugal</h4>
          </div>
          <div>
            <i className="fas fa-phone-alt" />
            <h4>+351 938105024</h4>
            <p>Monday to Friday 8 Am to 6 Pm</p>
          </div>
          <div>
            <i className="far fa-envelope" />
            <h4>nadjibmouhoun1@gmail.com</h4>
            <p>Email us your query</p>
          </div>
          <a href="mailto:nadjibmouhoun1@gmail.com" className="btn">
            SEND MESSAGE
          </a>
        </div>
      </div>
    </section>
  );
}
