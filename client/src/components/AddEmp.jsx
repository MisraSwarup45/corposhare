import "./AddEmp.scss"
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import ip from "./ip";

export default function AddEmp() {
    const [value, onChange] = useState(new Date());
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [education, setEducation] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [resume, setResume] = useState('');
    const [department, setDepartment] = useState('');
    const [contact, setContact] = useState('');
    const [company, setCompany] = useState('');
    const [hireDate, setHireDate] = useState(new Date());
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [zip_code, setZip_code] = useState('');
    const [submissionMessage, setSubmissionMessage] = useState(null);


    const handleSave = async () => {
        const data = {
            name,
            email,
            profile_pic: profilePic,
            age,
            sex,
            education,
            skills,
            experience,
            resume,
            department,
            contact,
            hire_date: hireDate.toISOString().split('T')[0],
            company: 2,
            address1,
            address2,
            zip_code
        };

        try {
            const response = await fetch(`http://${ip}/api/v1/employees/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Success: handle the response
                setSubmissionMessage("Employee saved successfully");
                console.log("Data saved successfully");
                setName('');
                setEmail('');
                setProfilePic('');
                setAge('');
                setSex('');
                setEducation('');
                setSkills('');
                setExperience('');
                setResume('');
                setDepartment('');
                setContact('');
                setHireDate(new Date());
                setAddress1('');
                setAddress2('');
                setZip_code('');
            } else {
                // Error: handle the error
                console.error("Failed to save data");
            }
        } catch (error) {
            console.error("Failed to send the request:", error);
        }
    };

    return (
        <div className="main_emp">
            <div className="header">
                <h3>Add Staff</h3>
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
                                <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="profilePic">Profile Pic</label>
                                <input type="text" id="profilePic" name="profilePic" value={profilePic} onChange={e => setProfilePic(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="age">Age</label>
                                <input type="number" id="age" name="age" value={age} onChange={e => setAge(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="sex">Sex</label>
                                <input type="text" id="sex" name="sex" value={sex} onChange={e => setSex(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="education">Education</label>
                                <input type="text" id="education" name="education" value={education} onChange={e => setEducation(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="skills">Skills</label>
                                <input type="text" id="skills" name="skills" value={skills} onChange={e => setSkills(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="experience">Experience</label>
                                <input type="number" id="experience" name="experience" value={experience} onChange={e => setExperience(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="resume">Resume</label>
                                <input type="text" id="resume" name="resume" value={resume} onChange={e => setResume(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="department">Department</label>
                                <input type="text" id="department" name="department" value={department} onChange={e => setDepartment(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="contact">Contact</label>
                                <input type="text" id="contact" name="contact" value={contact} onChange={e => setContact(e.target.value)} />
                            </div>
                            <div className="input_con">
                                <label htmlFor="hireDate">Hire Date</label>
                                <DatePicker onChange={setHireDate} value={hireDate} id="hireDate" name="hireDate" />
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
                                    <input type="text" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="department">Department</label>
                                    <input type="text" id="department" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                                </div>
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
                        <div className="header">OTHER DETAILS</div>
                        <div className="info_details">
                            <div className="input_wrapper">
                                <div className="input_con">
                                    <label htmlFor="address1">Address Line 1</label>
                                    <input type="text" id="address1" name="address1" value={address1} onChange={(e)=>setAddress1(e.target.value)} />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="address2">Address Line 2</label>
                                    <input type="text" id="address2" name="address2" value={address2} onChange={(e)=>setAddress2(e.target.value)} />
                                </div>
                                <div className="input_con">
                                    <label htmlFor="zipcode">Zipcode</label>
                                    <input type="number" id="zipcode" name="zipcode" value={zip_code} onChange={(e)=>setZip_code(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="company_details">
                        <div className="info_details button_details">
                            <button onClick={handleSave}>Save</button>
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
    );
}

