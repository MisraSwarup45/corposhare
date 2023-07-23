import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DatePicker from 'react-date-picker';
import ip from './ip';

// import dotenv from 'dotenv';

// dotenv.config();

const EditEmpProfile = () => {
    const { id } = useParams();
    console.log(ip);
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        profile_pic: '',
        age: '',
        sex: '',
        education: '',
        skills: '',
        experience: '',
        resume: '',
        department: '',
        contact: '',
        company: '',
        hireDate: new Date(),
        address1: '',
        address2: '',
        zip_code: '',
    });
    const [submissionMessage, setSubmissionMessage] = useState(null);

    // const ip = process.env.REACT_APP_IP_ADDRESS;

    // console.log(id);

    const handleUpdate = (e) => {
        e.preventDefault();
        // console.log('Update button clicked!');
        fetch(`http://${ip}/api/v1/employee/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Employee updated successfully:', data);
                setSubmissionMessage('Employee updated successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
            }
            );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const handleHireDateChange = (date) => {
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            hireDate: date,
        }));
    };

    useEffect(() => {
        // Fetch data from the API
        fetch(`http://${ip}/api/v1/employee/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setEmployee(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    return (
        <div>

            <div className="main_emp">
                <div className="header">
                    <h3>Edit Staff</h3>
                </div>
                <div className="emp_info">
                    <div className="personal_info">
                        {/* <div className="profile_img">
                            <div className="header">PROFILE IMAGE</div>
                            <div className="img_container">
                                <img src="" alt="" />
                            </div>
                        </div> */}
                        <div className="emp_details">
                            <div className="header">EMPLOYEE DETAILS</div>
                            <div className="input_wrapper">
                                <div className="input_con">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={employee.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={employee.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="profile_pic">Profile Pic</label>
                                    <input
                                        type="text"
                                        id="profile_pic"
                                        name="profile_pic"
                                        value={employee.profile_pic}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="age">Age</label>
                                    <input
                                        type="number"
                                        id="age"
                                        name="age"
                                        value={employee.age}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="sex">Sex</label>
                                    <input
                                        type="text"
                                        id="sex"
                                        name="sex"
                                        value={employee.sex}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="education">Education</label>
                                    <input
                                        type="text"
                                        id="education"
                                        name="education"
                                        value={employee.education}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="skills">Skills</label>
                                    <input
                                        type="text"
                                        id="skills"
                                        name="skills"
                                        value={employee.skills}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">

                                    <label htmlFor="experience">Experience</label>
                                    <input
                                        type="number"
                                        id="experience"
                                        name="experience"
                                        value={employee.experience}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="resume">Resume</label>
                                    <input
                                        type="text"
                                        id="resume"
                                        name="resume"
                                        value={employee.resume}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="department">Department</label>
                                    <input
                                        type="text"
                                        id="department"
                                        name="department"
                                        value={employee.department}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="contact">Contact</label>
                                    <input
                                        type="text"
                                        id="contact"
                                        name="contact"
                                        value={employee.contact}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="hireDate">Hire Date</label>
                                    <DatePicker
                                        onChange={handleHireDateChange}
                                        value={employee.hireDate}
                                        id="hireDate"
                                        name="hireDate"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="company_info">
                        <div className="company_details">
                            <div className="header">COMPANY DETAILS</div>
                            <div className="info_details">
                                <div className="input_wrapper">
                                    <div className="input_con">
                                        <label htmlFor="company">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={employee.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="input_con">
                                        <label htmlFor="department">Department</label>
                                        <input
                                            type="text"
                                            id="department"
                                            name="department"
                                            value={employee.department}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {/* <div className="input_con">
                                        <label htmlFor="hiredate">Hire Date</label>
                                        <DatePicker
                                            onChange={handleHireDateChange}
                                            value={employee.hireDate}
                                            id="hiredate"
                                            name="hiredate"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="company_details">
                            {/* <div className="header">EMPLOYEE SKILLS</div>
                            <div className="info_details">
                                <div className="input_wrapper">
                                    <div className="input_con">
                                        <label htmlFor="education">Education</label>
                                        <input type="text" id="education" name="education" />
                                    </div>
                                    <div className="input_con">
                                        <label htmlFor="experience">Experience</label>
                                        <input type="text" id="experience" name="experience" />
                                    </div>
                                    <div className="input_con">
                                        <label htmlFor="skills">Skills</label>
                                        <input type="text" id="skills" name="skills" />
                                    </div>
                                    <div className="input_con">
                                        <label htmlFor="resume">Resume</label>
                                        <input className="resume" type="file" id="resume" name="resume" />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="other_info company_info">
                        <div className="company_details">
                            <div className="company_details">
                                <div className="header">OTHER DETAILS</div>
                                <div className="info_details">
                                    <div className="input_wrapper">
                                        <div className="input_con">
                                            <label htmlFor="address1">Address Line 1</label>
                                            <input type="text" id="address1" name="address1" value={employee.address1} onChange={handleChange} />
                                        </div>
                                        <div className="input_con">
                                            <label htmlFor="address2">Address Line 2</label>
                                            <input type="text" id="address2" name="address2" value={employee.address2} onChange={handleChange} />
                                        </div>
                                        <div className="input_con">
                                            <label htmlFor="zipcode">Zipcode</label>
                                            <input type="number" id="zipcode" name="zip_code" value={employee.zip_code} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="company_details">
                                <div className="info_details button_details">
                                    <button onClick={handleUpdate}>Save</button>
                                    <button>Cancel</button>
                                </div>
                            </div>
                            {submissionMessage && (
                                <div className="submission_message success">
                                    <span>&#10004;</span>
                                    <p>{submissionMessage}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default EditEmpProfile;
