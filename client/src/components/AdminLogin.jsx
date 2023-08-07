import React, { useState } from 'react';
import './AdminLogin.scss';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    education: [
      {
        institution: '',
        degree: '',
        startYear: '',
        endYear: '',
        aboutEducation: ''
      }
    ],
    experience: [
      {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        aboutPosition: ''
      }
    ],
    projectIdeas: [
      {
        projectName: '',
        description: '',
        skillsRequired: ''
      }
    ],
    about: ''
  });

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;

    if (dataset.fieldType === 'education') {
      const updatedEducation = formData.education.map((edu, index) =>
        index === parseInt(dataset.index) ? { ...edu, [name]: value } : edu
      );
      setFormData((prevData) => ({
        ...prevData,
        education: updatedEducation
      }));
    } else if (dataset.fieldType === 'experience') {
      const updatedExperience = formData.experience.map((exp, index) =>
        index === parseInt(dataset.index) ? { ...exp, [name]: value } : exp
      );
      setFormData((prevData) => ({
        ...prevData,
        experience: updatedExperience
      }));
    } else if (dataset.fieldType === 'project') {
      const updatedProjectIdeas = formData.projectIdeas.map((project, index) =>
        index === parseInt(dataset.index) ? { ...project, [name]: value } : project
      );
      setFormData((prevData) => ({
        ...prevData,
        projectIdeas: updatedProjectIdeas
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleAddEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        {
          institution: '',
          degree: '',
          startYear: '',
          endYear: '',
          aboutEducation: ''
        }
      ]
    }));
  };

  const handleAddExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          aboutPosition: ''
        }
      ]
    }));
  };

  const handleAddProject = () => {
    setFormData((prevData) => ({
      ...prevData,
      projectIdeas: [
        ...prevData.projectIdeas,
        {
          projectName: '',
          description: '',
          skillsRequired: ''
        }
      ]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData to the backend API using fetch or any other method.
    console.log('Form Data:', formData);
  };

  return (
    <div className="admin-login-wrapper">
      <form onSubmit={handleSubmit} className="admin-form">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <h3>Education:</h3>
        {formData.education.map((edu, index) => (
          <div key={index} className="education-section">
            <label htmlFor={`institution-${index}`}>Institution:</label>
            <input
              type="text"
              id={`institution-${index}`}
              name="institution"
              data-field-type="education"
              data-index={index}
              value={edu.institution}
              onChange={handleChange}
              required
            />

            <label htmlFor={`degree-${index}`}>Degree:</label>
            <input
              type="text"
              id={`degree-${index}`}
              name="degree"
              data-field-type="education"
              data-index={index}
              value={edu.degree}
              onChange={handleChange}
              required
            />

            <label htmlFor={`startYear-${index}`}>Start Year:</label>
            <input
              type="text"
              id={`startYear-${index}`}
              name="startYear"
              data-field-type="education"
              data-index={index}
              value={edu.startYear}
              onChange={handleChange}
              required
            />

            <label htmlFor={`endYear-${index}`}>End Year:</label>
            <input
              type="text"
              id={`endYear-${index}`}
              name="endYear"
              data-field-type="education"
              data-index={index}
              value={edu.endYear}
              onChange={handleChange}
              required
            />

            <label htmlFor={`aboutEducation-${index}`}>About Education:</label>
            <textarea
              id={`aboutEducation-${index}`}
              name="aboutEducation"
              data-field-type="education"
              data-index={index}
              value={edu.aboutEducation}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="button" className="add-section-btn" onClick={handleAddEducation}>
          Add Education
        </button>

        <h3>Experience:</h3>
        {formData.experience.map((exp, index) => (
          <div key={index} className="experience-section">
            <label htmlFor={`company-${index}`}>Company:</label>
            <input
              type="text"
              id={`company-${index}`}
              name="company"
              data-field-type="experience"
              data-index={index}
              value={exp.company}
              onChange={handleChange}
              required
            />

            <label htmlFor={`position-${index}`}>Position:</label>
            <input
              type="text"
              id={`position-${index}`}
              name="position"
              data-field-type="experience"
              data-index={index}
              value={exp.position}
              onChange={handleChange}
              required
            />

            <label htmlFor={`startDate-${index}`}>Start Date:</label>
            <input
              type="text"
              id={`startDate-${index}`}
              name="startDate"
              data-field-type="experience"
              data-index={index}
              value={exp.startDate}
              onChange={handleChange}
              required
            />

            <label htmlFor={`endDate-${index}`}>End Date:</label>
            <input
              type="text"
              id={`endDate-${index}`}
              name="endDate"
              data-field-type="experience"
              data-index={index}
              value={exp.endDate}
              onChange={handleChange}
              required
            />

            <label htmlFor={`aboutPosition-${index}`}>About Position:</label>
            <textarea
              id={`aboutPosition-${index}`}
              name="aboutPosition"
              data-field-type="experience"
              data-index={index}
              value={exp.aboutPosition}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="button" className="add-section-btn" onClick={handleAddExperience}>
          Add Experience
        </button>

        <h3>Project Ideas:</h3>
        {formData.projectIdeas.map((project, index) => (
          <div key={index} className="project-section">
            <label htmlFor={`projectName-${index}`}>Project Name:</label>
            <input
              type="text"
              id={`projectName-${index}`}
              name="projectName"
              data-field-type="project"
              data-index={index}
              value={project.projectName}
              onChange={handleChange}
              required
            />

            <label htmlFor={`description-${index}`}>Description:</label>
            <textarea
              id={`description-${index}`}
              name="description"
              data-field-type="project"
              data-index={index}
              value={project.description}
              onChange={handleChange}
              required
            />

            <label htmlFor={`skillsRequired-${index}`}>Skills Required:</label>
            <input
              type="text"
              id={`skillsRequired-${index}`}
              name="skillsRequired"
              data-field-type="project"
              data-index={index}
              value={project.skillsRequired}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="button" className="add-section-btn" onClick={handleAddProject}>
          Add Project Idea
        </button>

        <label htmlFor="about">About:</label>
        <textarea id="about" name="about" value={formData.about} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminLogin;
