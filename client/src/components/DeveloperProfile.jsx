import React, { useState, useEffect } from 'react';
import './DeveloperProfile.scss';
import Navbar from './Navbar';

const DeveloperProfile = () => {
  const [developer, setDeveloper] = useState({});

  useEffect(() => {
    // Fetch project admin data from the server
    fetch("http://146.190.121.119:8000/contributor/1")
      .then((res) => res.json())
      .then((data) => setDeveloper(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="developer-profile-container">
        <div className="developer-photo">
          <img src={developer.profile_pic} alt={developer.name} />
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

          {/* <div className="experience-section">
            <h3>Experience</h3>
            {developer.experience.map((exp, index) => (
              <div key={index}>
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
