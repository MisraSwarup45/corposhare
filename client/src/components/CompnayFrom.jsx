import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import Navbar from './Navbar';
import Footer from './Footer';
import './CompanyForm.scss';
import { useNavigate } from 'react-router-dom';
import ip from './ip';

const CompanyForm = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const currentDate = new Date(); // Get the current date
  const yearEstablished = currentDate.toISOString();

  const [selectedOption, setSelectedOption] = useState([]);
  const [logo, setImage] = useState('');
  const [userId, setUserId] = useState('');
  const [info, setInfo] = useState({
    company_name: 1,
    logo: 'https://loremflickr.com/320/240',
    email: 'workcs@gmail.com',
    services_offered: "selectedOption",
    location: 'Chennai',
    founder: 'Mridul',
    employees: '20',
    year_established: '2023-06-08',
    valuation: '20 Million',
    description: 'This is a sample descriptionription',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = Cookies.get('accesstoken');
  //   if (!token) {
  //     navigate('/login');
  //     return;
  //   }
  //   const decoded = jwt_decode(token);
  //   setUserId(decoded.user_id);
  // }, [navigate]);

  const handleChange = (e) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      // name: info.company_name,
      // logo: "https://loremflickr.com/320/240",
      // email: info.email,
      // location: info.location,
      // founder: info.founder,
      // employees: info.employees,
      // year_established: info.year_established,
      // valuation: info.valuation,
      // services: selectedOption.map((option) => option.value),
      // description: info.description,
      // company_name: 1

      // "founder": "Mridul Corpo",
      // "descriptionription": "kjfalkdsjfoaihdsfiasdf",
      // "services_offered": "gnsejrhejheriohriohriuwohbiurjbh",
      // "logo": "Nuirgbueirgbeurigbeurgbue",
      // "year_established_established": "2023-06-08",
      // "employees": 7,
      // "valuation": "slfnhtnhi",
      // "company_name": 1
    };

    console.log(data);

    try {
      const response = await fetch(`http://${ip}/api/v1/companies/`, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Application submitted successfully!');
        // Reset form and state
        setInfo({
          company_name: '',
          logo: '',
          email: '',
          location: '',
          services_offered: '',
          founder: '',
          employees: '',
          year_established: '',
          valuation: '',
          description: '',
        });
        setSelectedOption([]);
        setImage('');
        setErrorMessage('');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.log('Error:', error.message);
      setErrorMessage('Error occurred');
    }

    setIsLoading(false);
  };



  return (
    <>
      <Navbar />
      {/* <button onClick={deleteCompany}>Delete</button> */}
      <div className="main-company-form">
        <div className="company-from-wrapper">
          <div className="company-from-alpha">
            <h3>Register Here</h3>
            <h4>
              Start your <br />
              journey with us.
            </h4>
            <p>Discover the world's best community for freelancers.</p>
          </div>

          <div className="company-from-beta">
            <form onSubmit={handleSubmit}>
              <div className="from-beta-name">
                <div className="div1">
                  <label htmlFor="company-name">Company Name</label>
                  <br />
                  <input
                    type="text"
                    value={info.company_name}
                    id="company-name"
                    name="company_name"
                    required
                    onChange={handleChange}
                    placeholder="Eg: Cubix"
                  />
                </div>
                <div className="div2">
                  <label htmlFor="images">Logo</label>
                  <br />
                  <input
                    type="file"
                    id="images"
                    accept="logo/*"
                    // required
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="from-beta-email">
                <div className="div1">
                  <label htmlFor="company-email">Email</label>
                  <br />
                  <input
                    type="text"
                    id="company-email"
                    name="email"
                    value={info.email}
                    required
                    onChange={handleChange}
                    placeholder="Eg: info@cubix.com"
                  />
                </div>
                <div className="div2">
                  <label htmlFor="company-location">Location</label>
                  <br />
                  <input
                    type="text"
                    id="company-location"
                    name="location"
                    value={info.location}
                    required
                    onChange={handleChange}
                    placeholder="Eg: Delhi"
                  />
                </div>
              </div>
              <div className="from-beta-details">
                <div className="div1">
                  <label htmlFor="company-founder">Founder Name</label>
                  <br />
                  <input
                    type="text"
                    id="company-founder"
                    name="founder"
                    value={info.founder}
                    required
                    onChange={handleChange}
                    placeholder="Eg: John"
                  />
                </div>
                <div className="detail-wrapper">
                  <div className="div2">
                    <label htmlFor="company-services">No. of Employees</label>
                    <br />
                    <input
                      type="number"
                      id="company-services"
                      name="employees"
                      value={info.employees}
                      required
                      onChange={handleChange}
                      placeholder="Eg: 50"
                    />
                  </div>
                  <div className="div3">
                    <label htmlFor="company-year_established">Establishment Year</label>
                    <br />
                    <input
                      type="number"
                      id="company-year_established"
                      name="year_established"
                      value={info.year_established}
                      // required
                      onChange={handleChange}
                      placeholder="Eg: 2022"
                    />
                  </div>

                </div>
              </div>
              <div className="div4">
                <label htmlFor="company-valuation">Valuation</label>
                <br />
                <input
                  type="text"
                  id="company-valuation"
                  name="valuation"
                  value={info.valuation}
                  required
                  onChange={handleChange}
                  placeholder="Eg: $1,000,000"
                />
              </div>
              <div className="from-beta-dropdown">
                <label htmlFor="company-services">Services Offered</label>
                <div className="company-services-dropdown">
                  <Select
                    // required={true}
                    isMulti={true}
                    onChange={(selectedOptions) =>
                      setSelectedOption(selectedOptions)
                    }
                    options={options}
                  />
                </div>
              </div>

              <div className="from-beta-textarea">
                <label htmlFor="text-description">descriptionription</label>
                <br />
                <textarea
                  id="text-description"
                  name="description"
                  value={info.description}
                  required
                  onChange={handleChange}
                  placeholder="Write something about your company"
                />
              </div>

              <div className="from-beta-textarea-onsubmit">
                <input type="submit" name="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyForm;