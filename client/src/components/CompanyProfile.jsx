import React, { useState, useEffect } from 'react';
import './CompanyProfile.scss';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ip from './ip';

const CompanyProfile = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // const { id } = useParams();

  const handleEdit = () => {
    console.log('Editing company information.');
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const response = await fetch(`http://${ip}/api/v1/company/3`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyInfo),
      });

      if (response.ok) {
        console.log('Company information updated successfully.');
      } else {
        console.error('Failed to update company information.');
      }
    } catch (error) {
      console.error('An error occurred while updating company information.', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCompanyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await fetch(`http://${ip}/api/v1/company/3`);
        if (response.ok) {
          const data = await response.json();
          setCompanyInfo(data);
        } else {
          console.error('Failed to fetch company information.');
        }
      } catch (error) {
        console.error('An error occurred while fetching company information.', error);
      }
    };

    fetchCompanyInfo();
  }, []);

  if (!companyInfo) {
    return <div>Loading...</div>;
  }

  console.log(companyInfo);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://${ip}/api/v1/company/3`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyInfo),


      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response or perform any additional actions
          console.log('Company deleted successfully:', data);
          setCompanyInfo({
            founder: "",
            logo: "",
            description: "",
            year_established: "",
            contact: "",
            employees: 0,
            valuation: 0,
          });
        })
    } catch (error) {
      console.error('An error occurred while deleting company information.', error);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="company-profile">
        <h2>{companyInfo.name}</h2>
        <div className="company-details">
          <div className="detail logo">
            <h3>Logo</h3>
            <div className="logo-image">
              <img src={companyInfo.logo} alt="Company Logo" />
            </div>
          </div>
          <div className="detail">
            <h3>Description</h3>
            {isEditing ? (
              <textarea
                className="edit-field"
                name="description"
                value={companyInfo.description}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.description}</p>
            )}
          </div>
          <div className="detail">
            <h3>Services Offered</h3>
            {isEditing ? (
              <ul>
                {companyInfo.services.map((service, index) => (
                  <li key={index}>
                    <input
                      className="edit-field"
                      name={`services[${index}]`}
                      value={service}
                      onChange={handleChange}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {companyInfo.services && companyInfo.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="detail">
            <h3>Founder</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="founder"
                value={companyInfo.founder}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.founder}</p>
            )}
          </div>
          <div className="detail">
            <h3>Employees</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="employees"
                value={companyInfo.employees}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.employees}</p>
            )}
          </div>
          <div className="detail">
            <h3>Year Established</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="year"
                value={companyInfo.year}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.year}</p>
            )}
          </div>
          <div className="detail">
            <h3>Valuation</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="valuation"
                value={companyInfo.valuation}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.valuation}</p>
            )}
          </div>
          <div className="detail">
            <h3>Location</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="location"
                value={companyInfo.location}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.location}</p>
            )}
          </div>
          <div className="detail">
            <h3>Email</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="email"
                value={companyInfo.email}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.email}</p>
            )}
          </div>
        </div>
        <div className="edit-actions">
          {/* {isEditing ? (
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
          )} */}

          <Link to={`/company-profile/edit/3`}>
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
          </Link>

          <button className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default CompanyProfile;
