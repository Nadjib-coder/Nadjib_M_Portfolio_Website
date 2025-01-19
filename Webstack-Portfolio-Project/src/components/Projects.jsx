import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Projects.css';

export default function Projects() {
  // Filter skills based on the selected category
  const [projects, setProjects] = useState([]);
  // State to store filtered projects based on category
  const [filteredProjects, setFilteredProjects] = useState([]);
  // State to track the selected category
  const [category, setCategory] = useState('All'); // State to track the selected category

  // Fetch projects data from the API when the component mounts
  useEffect(() => {
    axios
      .get('https://675df94e63b05ed079794401.mockapi.io/portfolio-api/projects')
      .then((response) => {
        setProjects(response.data); // Set the projects state with the fetched data
        setFilteredProjects(response.data); // Initially, set filtered projects to all projects
      })
      .catch((error) => {
        console.error('Error fetching projects:', error); // Log any errors for debugging
      });
  }, []);

  // Function to handle category change and filter projects
  const handleCategoryChange = (category) => {
    setCategory(category); // Update the selected category
    if (category === 'All') {
      setFilteredProjects(projects); // Show all projects if 'All' is selected
    } else {
      setFilteredProjects(
        // Filter projects based on the selected category
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
