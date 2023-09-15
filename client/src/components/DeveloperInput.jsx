import React, { useState } from 'react';
import './DeveloperInput.scss'
import Navbar from './Navbar';

const initialFormData = {
  id: 2,
  name: 'Subham Kumar Misra',
  role: 'Frontend Stack Developer',
  stack: ['React, HTML, CSS'],
  bio: ' I am a full stack developer with 5 years of experience.',
  profile_pic: 'https://avatars.githubusercontent.com/u/47280547?v=4',
  created_at: "2023-08-30T16:38:46.664000+00:00",
  updated_at: "2023-08-30T16:38:46.664000+00:00",
  user_id: 1,
  experiences: [
    {
      company_name: 'ABC Company',
      position: 'Full Stack Developer',
      start_date: '2018-01-01',
      end_date: '2020-01-01',
    },
  ],
  educations: [
    {
      institute: 'ABC University',
      degree: 'B.Tech',
      start_date: '2014-01-01',
      end_date: '2018-01-01',
    },
  ],
};

const DeveloperInput = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStackChange = (event, index) => {
    const updatedStack = [...formData.stack];
    updatedStack[index] = event.target.value;

    setFormData({
      ...formData,
      stack: updatedStack,
    });
  };

  const handleExperienceChange = (event, index) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][event.target.name] = event.target.value;

    setFormData({
      ...formData,
      experiences: updatedExperiences,
    });
  };

  const handleEducationChange = (event, index) => {
    const updatedEducations = [...formData.educations];
    updatedEducations[index][event.target.name] = event.target.value;

    setFormData({
      ...formData,
      educations: updatedEducations,
    });
  };

  const addStackField = () => {
    setFormData({
      ...formData,
      stack: [...formData.stack, ''],
    });
  };

  const removeStackField = (index) => {
    const updatedStack = [...formData.stack];
    updatedStack.splice(index, 1);

    setFormData({
      ...formData,
      stack: updatedStack,
    });
  };

  const addExperienceField = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        {
          company_name: '',
          position: '',
          start_date: '',
          end_date: '',
        },
      ],
    });
  };

  const removeExperienceField = (index) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences.splice(index, 1);

    setFormData({
      ...formData,
      experiences: updatedExperiences,
    });
  };

  const addEducationField = () => {
    setFormData({
      ...formData,
      educations: [
        ...formData.educations,
        {
          institute: '',
          degree: '',
          start_date: '',
          end_date: '',
        },
      ],
    });
  };

  const removeEducationField = (index) => {
    const updatedEducations = [...formData.educations];
    updatedEducations.splice(index, 1);

    setFormData({
      ...formData,
      educations: updatedEducations,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const apiUrl = 'http://144.126.220.247:8000/contributor';

    const requestBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    fetch(apiUrl, requestBody)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('POST request successful:', data);
      })
      .catch((error) => {
        console.error('Error making POST request:', error);
      });
  };

  return (
    <div>
      <Navbar /> <br /> <br /> <br /> <br />
      <div className="new-developer-input">
        <h2>Create Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Role:</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Stack:</label>
            {formData.stack.map((stackItem, index) => (
              <div key={index} className="stack-item">
                <input
                  type="text"
                  value={stackItem}
                  onChange={(event) => handleStackChange(event, index)}
                  className="input"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeStackField(index)}
                    className="remove-button"
                  >
                    Remove Stack
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addStackField} className="add-button">
              Add Stack
            </button>
          </div>
          <div className="form-group">
            <label className="label">Bio:</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="textarea"
            />
          </div>
          <div className="form-group">
            <label className="label">Profile Picture URL:</label>
            <input
              type="text"
              name="profile_pic"
              value={formData.profile_pic}
              onChange={handleInputChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <h3 className="sub-heading">Experiences</h3>
            {formData.experiences.map((experience, index) => (
              <div key={index} className="experience-item">
                <label className="label">Company Name:</label>
                <input
                  type="text"
                  name="company_name"
                  value={experience.company_name}
                  onChange={(event) => handleExperienceChange(event, index)}
                  className="input"
                />
                <label className="label">Position:</label>
                <input
                  type="text"
                  name="position"
                  value={experience.position}
                  onChange={(event) => handleExperienceChange(event, index)}
                  className="input"
                />
                <label className="label">Start Date:</label>
                <input
                  type="text"
                  name="start_date"
                  value={experience.start_date}
                  onChange={(event) => handleExperienceChange(event, index)}
                  className="input"
                />
                <label className="label">End Date:</label>
                <input
                  type="text"
                  name="end_date"
                  value={experience.end_date}
                  onChange={(event) => handleExperienceChange(event, index)}
                  className="input"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeExperienceField(index)}
                    className="remove-button"
                  >
                    Remove Experience
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addExperienceField}
              className="add-button"
            >
              Add Experience
            </button>
          </div>
          <div className="form-group">
            <h3 className="sub-heading">Educations</h3>
            {formData.educations.map((education, index) => (
              <div key={index} className="education-item">
                <label className="label">Institute:</label>
                <input
                  type="text"
                  name="institute"
                  value={education.institute}
                  onChange={(event) => handleEducationChange(event, index)}
                  className="input"
                />
                <label className="label">Degree:</label>
                <input
                  type="text"
                  name="degree"
                  value={education.degree}
                  onChange={(event) => handleEducationChange(event, index)}
                  className="input"
                />
                <label className="label">Start Date:</label>
                <input
                  type="text"
                  name="start_date"
                  value={education.start_date}
                  onChange={(event) => handleEducationChange(event, index)}
                  className="input"
                />
                <label className="label">End Date:</label>
                <input
                  type="text"
                  name="end_date"
                  value={education.end_date}
                  onChange={(event) => handleEducationChange(event, index)}
                  className="input"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeEducationField(index)}
                    className="remove-button"
                  >
                    Remove Education
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addEducationField}
              className="add-button"
            >
              Add Education
            </button>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeveloperInput;