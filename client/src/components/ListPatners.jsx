import React from 'react';
import './ListPatners.scss';
import Navbar from './Navbar';

const ListPatners = () => {
  // Sample data for developers and project admins
  const partners = [
    {
      name: 'John Doe',
      role: 'Developer',
      stack: 'React, Node.js',
      project: '',
      photo: 'https://via.placeholder.com/150', // Replace with the actual photo URL
    },
    {
      name: 'Jane Smith',
      role: 'Developer',
      stack: 'Angular, Express.js',
      project: '',
      photo: 'https://via.placeholder.com/150', // Replace with the actual photo URL
    },
    {
      name: 'Admin User',
      role: 'Admin',
      stack: '',
      project: 'Project Management',
      photo: 'https://via.placeholder.com/150', // Replace with the actual photo URL
    },
    {
      name: 'Project Admin',
      role: 'Admin',
      stack: '',
      project: 'Project XYZ',
      photo: 'https://via.placeholder.com/150', // Replace with the actual photo URL
    },
    // Add more partner data as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="partner-container">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <div className="partner-photo">
              <img src={partner.photo} alt={partner.name} />
            </div>
            <div className="partner-details">
              <h3>{partner.name}</h3>
              {partner.role === 'Developer' ? (
                <p>Tech Stack: {partner.stack}</p>
              ) : (
                <p>Project Name: {partner.project}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPatners;
