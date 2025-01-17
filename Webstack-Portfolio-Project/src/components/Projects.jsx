import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    axios
      .get('https://675df94e63b05ed079794401.mockapi.io/portfolio-api/projects')
      .then((response) => {
        setProjects(response.data);
        setFilteredProjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category),
      );
    }
  };

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="filter-buttons">
        <button className="btn" onClick={() => handleCategoryChange('All')}>
          All
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryChange('fullstack')}
        >
          Fullstack
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryChange('frontend')}
        >
          Frontend
        </button>
        <button className="btn" onClick={() => handleCategoryChange('backend')}>
          Backend
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryChange('algorithm/data structure')}
        >
          Algorithm / Data Structure
        </button>
      </div>
      <div className="current-category">
        <p>Current Category: {category}</p>
      </div>
      <div className="card-container">
        {filteredProjects.map((project) => (
          <div key={project.id} className="card-box">
            <h5>{project.name}</h5>
            <p>{project.description}</p>
            <a
              href={project.githubLink}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
