import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Skills.css';

export default function Skills() {
  const [skills, setSkills] = useState([]); // State to store all skills
  const [filteredSkills, setFilteredSkills] = useState([]); // State to store filtered skills based on category
  const [category, setCategory] = useState('All'); // State to track the selected category

  // Fetch skills data from the MockAPI when the component mounts
  useEffect(() => {
    axios
      .get('https://675df94e63b05ed079794401.mockapi.io/portfolio-api/skills')
      .then((response) => {
        setSkills(response.data); // Set the skills state with the fetched data
        setFilteredSkills(response.data); // Initially, set filtered skills to all skills
      })
      .catch((error) => {
        console.error('Error fetching skills:', error); // Log any errors for debugging
      });
  }, []);

  // Function to handle category change and filter skills based on the selected category
  const handleCategoryChange = (category) => {
    setCategory(category); // Update the selected category
    if (category === 'All') {
      setFilteredSkills(skills); // Show all skills if 'All' is selected
    } else {
      // Filter skills based on the selected category
      setFilteredSkills(skills.filter((skill) => skill.category === category));
    }
  };

  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>
      <div className="filter-buttons">
        <button className="btn" onClick={() => handleCategoryChange('All')}>
          All
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryChange('Automation')}
        >
          Automation
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryChange('Software Engineering')}
        >
          Software Engineering
        </button>
      </div>
      <div className="current-category">
        <p>Current Category: {category}</p>
      </div>
      <div className="card-container">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="card-box">
            <h5>{skill.title}</h5>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
