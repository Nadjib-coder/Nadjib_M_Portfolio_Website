import axios from 'axios';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const contactData = Object.fromEntries(formData.entries());
          axios
            .post('https://mockapi.io/endpoint/contact-messages', contactData)
            .then(() => alert('Message sent!'))
            .catch((error) => console.error('Error submitting form:', error));
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
}
