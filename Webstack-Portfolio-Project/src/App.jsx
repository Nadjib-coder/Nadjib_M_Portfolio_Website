import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('https://mockapi.io/endpoint/projects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#home">
          My Portfolio
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div id="home" className="section">
        <h1>Welcome to My Portfolio</h1>
      </div>

      <div id="about" className="section">
        <h2>About Me</h2>
        <p>Write a brief introduction about yourself here.</p>
      </div>

      <div id="skills" className="section">
        <h2>Skills</h2>
        <p>List your skills here (e.g., React, JavaScript, CSS).</p>
      </div>

      <div id="projects" className="section">
        <h2>Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="contact" className="section">
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
      </div>

      {/* Footer */}
      <footer className="text-center">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
