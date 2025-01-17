import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    axios
      .get('https://675df94e63b05ed079794401.mockapi.io/portfolio-api/skills')
      .then((response) => {
        setSkills(response.data);
        setFilteredSkills(response.data);
      })
      .catch((error) => {
        console.error('Error fetching skills:', error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
    if (category === 'All') {
      setFilteredSkills(skills);
    } else {
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
