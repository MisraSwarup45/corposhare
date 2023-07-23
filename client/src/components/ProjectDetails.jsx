import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import './ProjectDetails.scss';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';

import Navbar from './Navbar';
import Footer from './Footer';
import ip from './ip';

const ProjectDetails = () => {
    const [project, setProject] = useState({});
    const [delteMessage, setDeleteMessage] = useState(null);
    const [delteFlag, setDeleteFlag] = useState(false);
    const { id } = useParams();



    useEffect(() => {
        // Make the GET request to fetch the project details
        fetch(`http://${ip}/api/v1/project/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProject(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching project:", error);
            });

        // and store it in the state variable
    }, []);

    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleTermsCheckboxChange = (event) => {
        setTermsAccepted(event.target.checked);
    };

    const handleApplyNowClick = () => {
        if (termsAccepted) {
            // Apply now logic
            console.log('Application submitted!');
        }
    };

    const handleDeleteClick = () => {
        // Delete logic
        fetch(`http://${ip}/api/v1/project/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response or perform any additional actions
                setDeleteMessage('Project deleted successfully!');
                setDeleteFlag(true);
                console.log('Project deleted successfully:', data);
                setProject({
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
            });
    };

    return (
        <div>
            <Navbar />
            {
                delteFlag ? (
                    <div className="project-details__delete-message">{delteMessage}</div>
                ) : (
                    <div className="project-details">
                        <div className="project-details__content">
                            <section className="project-details__section">
                                <h2 className="project-details__title">{project.title}</h2>
                                <p className="project-details__company">Company: {project.comapny}</p>
                                <p className="project-details__pay">Pay: {project.pay}</p>
                                <p className="project-details__duration">Duration: {project.duration}</p>
                                <p className="project-details__employee-required">Employees Required: {project.employees_required}</p>
                                <p className="project-details__skills">Skills Required: {project.skills_req}</p>
                                <p className="project-details__created-at">Created At: {project.created_at}</p>
                                <p className="project-details__updated-at">Updated At: {project.updated_at}</p>
                            </section>
                            <section className="project-details__section">
                                <h3 className="project-details__section-title">Description</h3>
                                <p className="project-details__description">{project.description}</p>
                            </section>
                            <section className="project-details__section">
                                <h3 className="project-details__section-title">Contact</h3>
                                <div className="project-details__contact">
                                    <p className="project-details__email">{project.email}</p>
                                    <p className="project-details__contact-number">{project.contact_number}</p>
                                </div>
                            </section>
                            <section className="project-details__section">
                                <div className="project-details__terms">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={termsAccepted}
                                            onChange={handleTermsCheckboxChange}
                                        />
                                        I accept the terms and conditions
                                    </label>
                                </div>
                                <button
                                    className={`project-details__apply-button ${termsAccepted ? 'active' : ''}`}
                                    onClick={handleApplyNowClick}
                                    disabled={!termsAccepted}
                                >
                                    Apply Now
                                </button>
                                <button className="project-details__delete-button" onClick={handleDeleteClick}>
                                    <RiDeleteBin6Line />
                                    Delete
                                </button>

                                <Link to={`edit-project/${id}`}>
                                    <button className="project-details__update-button">
                                        <RiEdit2Line />
                                        Update
                                    </button>
                                </Link>

                            </section>
                        </div>
                    </div>
                )
            }
            <Footer />
        </div>
    );
}

export default ProjectDetails;
