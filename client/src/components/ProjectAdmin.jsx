import React, { useState, useEffect } from 'react';
import './ProjectAdmin.scss';
import Navbar from './Navbar';

const ProjectAdmin = () => {
  // Sample data for the project admin
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    // Fetch project admin data from the server
    fetch("http://146.190.121.119:8000/padmins")
      .then((res) => res.json())
      .then((data) => setAdmin(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      {admin.map((adminItem, index) => (
        <div className="project-admin-container" key={index}>
          <div className="admin-details">
            <h2>{adminItem.name}</h2>
            {/* <p>{adminItem.role}</p> */}
            <div className="education-section">
              <h3>Education</h3>
              <p>{adminItem.education}</p>
            </div>

            <div className="experience-section">
              <h3>Experience</h3>
              {adminItem.experience.map((exp, expIndex) => (
                <div key={expIndex}>
                  <h4>{exp.title}</h4>
                  <p>{exp.company}</p>
                  <p>{exp.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="project-ideas-section">
            <h3>Project Ideas</h3>
            {adminItem.projectIdeas.map((project, projectIndex) => (
              <div key={projectIndex} className="project-card">
                <h4>{project.title}</h4>
                <p>Tech Stack: {project.techStack}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ProjectAdmin;
