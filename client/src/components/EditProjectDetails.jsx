import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ip from './ip';

const EditProjectDetails = () => {

    const { id } = useParams();

    const [project, setProject] = useState({
        title: "",
        employees_required: 0,
        skills_req: "",
        time_tobe_dedicated: "",
        pay: "",
        duration: "",
        description: "",
        created_at: "",
        updated_at: "",
        image: "",
        email: "",
        contact_number: "",
        comapny: 0,
    });

    const [submissionMessage, setSubmissionMessage] = useState(null);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [name]: name === 'created_at' || name === 'updated_at' ? new Date(value).toISOString().split('T')[0] : value,
        }));
    };

    useEffect(() => {
        // Make the GET request with the project id
        fetch(`http://${ip}/api/v1/project/${id}`)
            .then((response) => response.json())
            .then((data) => {
                // Handle the response or perform any additional actions
                console.log('Project details fetched successfully:', data);
                setProject(data);
            })
            .catch((error) => {
                // Handle any errors
                console.error('Error fetching project details:', error);
            });
    }, []);

    const updateProject = () => {
        // Make the PUT request with the project data
        fetch(`http://${ip}/api/v1/project/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response or perform any additional actions
                console.log('Project updated successfully:', data);
                setSubmissionMessage("Project Updated successfully");
            })
            .catch((error) => {
                // Handle any errors
                console.error('Error updating project:', error);
            });
    };

    // const handleCancel = () => {
    //     const navigate = useNavigate();
    //     navigate('/');
    // };

    return (
        <>
            {/* <Navbar /> */}
            <div className="main_add_project">
                <h2>Edit Project</h2>
                <div className="project_details">
                    <div className="input_con">
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="comapny"
                            value={project.comapny}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={project.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={project.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con">
                        <label htmlFor="contact_number">Contact Number</label>
                        <input
                            type="tel"
                            id="contact_number"
                            name="contact_number"
                            value={project.contact_number}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con">
                        <label htmlFor="created_at">Created At</label>
                        <input
                            type="date"
                            id="created_at"
                            name="created_at"
                            value={project.created_at}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con">
                        <label htmlFor="updated_at">Updated At</label>
                        <input
                            type="date"
                            id="updated_at"
                            name="updated_at"

                            value={project.updated_at}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="multiple_con">
                        <div className="input_wrap">
                            <label htmlFor="pay">Pay</label>
                            <input
                                type="text"
                                id="pay"
                                name="pay"
                                value={project.pay}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input_wrap">
                            <label htmlFor="duration">Duration</label>
                            <input
                                type="text"
                                id="duration"
                                name="duration"
                                value={project.duration}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input_wrap">
                            <label htmlFor="employees_required">Employees Required</label>
                            <input
                                type="number"
                                id="employees_required"
                                name="employees_required"
                                value={project.employees_required}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="input_con">
                        <label htmlFor="skills">Skills</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills_req"
                            value={project.skills_req}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con textarea_con">
                        <label htmlFor="description">Description</label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            value={project.description}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="input_con button_con">
                        <button onClick={updateProject}>Update Project</button>
                        <button>Cancel</button>
                    </div>
                    {submissionMessage && (
                        <div className="submission_message success">
                            <span>&#10004;</span>
                            <p>{submissionMessage}</p>
                        </div>
                    )}
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default EditProjectDetails;