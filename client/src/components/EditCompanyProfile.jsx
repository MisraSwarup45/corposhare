import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import Select from 'react-select';
import ip from './ip';



const EditCompanyProfile = () => {
    const [info, setInfo] = useState({
        founder: "",
        logo: "",
        description: "",
        year_established: "",
        contact: "",
        employees: 0,
        valuation: 0,
    });

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [logo, setImage] = useState('');
    const [selectedOption, setSelectedOption] = useState([]);
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const [isEditing, setIsEditing] = useState(false);

    const { id } = useParams();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    useEffect(() => {
        const fetchCompanyInfo = async () => {
            try {
                const response = await fetch(`http://${ip}/api/v1/company/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setInfo(data);
                } else {
                    console.error('Failed to fetch company information.');
                }
            } catch (error) {
                console.error('An error occurred while fetching company information.', error);
            }
        };
        fetchCompanyInfo();
    }, [id]);

    const handleCompanyChanges = async (e) => {
        e.preventDefault();
        fetch(`http://${ip}/api/v1/company/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })

            .then((response) => {
                if (response.ok) {
                    console.log('Company information updated successfully.');
                } else {
                    console.error('Failed to update company information.');
                }
            }
            )
            .catch((error) => {
                console.error('An error occurred while updating company information.', error);
            }
            );
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
                        <form onSubmit={handleCompanyChanges}>
                            <div className="from-beta-name">
                                <div className="div1">

                                    fetch
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
                                {/* <div className="div1">
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
                </div> */}
                                {/* <div className="div2">
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
                </div> */}
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
                                <label htmlFor="text-description">Description</label>
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
    )
}

export default EditCompanyProfile;