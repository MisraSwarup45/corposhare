import React from 'react';
import './DeveloperProfile.scss';
import Navbar from './Navbar';

const DeveloperProfile = () => {
  // Sample data for the developer profile
  const developer = {
    name: 'John Doe',
    role: 'Developer',
    stack: 'React, Node.js',
    bio: 'I am a passionate developer with expertise in React and Node.js.',
    photo: 'https://via.placeholder.com/200', // Replace with the actual photo URL
    education: 'Bachelor of Computer Science, XYZ University',
    experience: [
      {
        title: 'Frontend Developer',
        company: 'ABC Tech Solutions',
        duration: 'Jan 2018 - Dec 2020',
      },
      {
        title: 'Full-stack Developer',
        company: 'Tech Co.',
        duration: 'Jan 2021 - Present',
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="developer-profile-container">
        <div className="developer-photo">
          <img src={developer.photo} alt={developer.name} />
        </div>
        <div className="developer-details">
          <h2>{developer.name}</h2>
          <p>{developer.role}</p>
          <p>Tech Stack: {developer.stack}</p>
          <p>{developer.bio}</p>

          <div className="education-section">
            <h3>Education</h3>
            <p>{developer.education}</p>
          </div>

          <div className="experience-section">
            <h3>Experience</h3>
            {developer.experience.map((exp, index) => (
              <div key={index}>
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
