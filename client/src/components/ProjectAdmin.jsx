import React from 'react';
import './ProjectAdmin.scss';
import Navbar from './Navbar';

const ProjectAdmin = () => {
  // Sample data for the project admin
  const projectAdmin = {
    name: 'Jane Smith',
    role: 'Project Admin',
    education: 'Bachelor of Business Administration, XYZ University',
    experience: [
      {
        title: 'Project Management Intern',
        company: 'Tech Solutions Inc.',
        duration: 'May 2021 - Aug 2021',
      },
      {
        title: 'Project Coordinator',
        company: 'Project Management Co.',
        duration: 'Jan 2022 - Present',
      },
    ],
    projectIdeas: [
      {
        title: 'E-commerce Platform',
        techStack: 'React, Node.js, MongoDB',
        description:
          'A full-fledged e-commerce platform with user authentication, product catalog, and shopping cart functionality.',
      },
      {
        title: 'Community Engagement App',
        techStack: 'React Native, Firebase',
        description:
          'An app to facilitate community engagement by connecting local residents and nonprofit organizations.',
      },
      {
        title: 'Smart Home Automation System',
        techStack: 'Arduino, Raspberry Pi, MQTT',
        description:
          'An IoT-based smart home automation system to control lights, appliances, and temperature.',
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="project-admin-container">
        <div className="admin-details">
          <h2>{projectAdmin.name}</h2>
          <p>{projectAdmin.role}</p>
          <div className="education-section">
            <h3>Education</h3>
            <p>{projectAdmin.education}</p>
          </div>

          <div className="experience-section">
            <h3>Experience</h3>
            {projectAdmin.experience.map((exp, index) => (
              <div key={index}>
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-ideas-section">
          <h3>Project Ideas</h3>
          {projectAdmin.projectIdeas.map((project, index) => (
            <div key={index} className="project-card">
              <h4>{project.title}</h4>
              <p>Tech Stack: {project.techStack}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAdmin;
