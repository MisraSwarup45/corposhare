import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectForm from './AddProject';
import ip from "./ip";

export default function EditProject() {
    const { id } = useParams();
    

    

    const [project, setProject] = useState({
        title: "Swarup",
        employees_required: 110,
        skills_req: "React",
        time_tobe_dedicated: "5 hours",
        pay: "200000",
        duration: "3 months",
        description: "lorem ipsum",
        created_at: "2023-06-08",
        updated_at: " 2023-06-08",
        image: "",
        // email: "swarup@gamil.com",
        // contact_number: "239417308974",
        company: 1,
    });



    useEffect(() => {
        // Fetch project data based on id and populate the form
        fetch(`http://${ip}/api/v1/projects/${id}/`)
            .then((response) => response.json())
            .then((data) => {
                setProject(data);
            })
            .catch((error) => {
                console.error("Error fetching project:", error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [name]:
                name === "created_at" || name === "updated_at"
                    ? new Date(value).toISOString().split("T")[0]
                    : value,
        }));
    };

    const handleUpdateProject = () => {
        // Make the PUT request with the updated project data
        fetch(`http://${ip}/api/v1/projects/${id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response or perform any additional actions
                console.log("Project updated successfully:", data);
            })
            .catch((error) => {
                // Handle any errors
                console.error("Error updating project:", error);
            });
    };

    const handleDeleteProject = (e) => {
        // Make the DELETE request
        e.preventDefault();
        fetch(`http://${ip}/api/v1/projects/${id}/`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response or perform any additional actions
                console.log("Project deleted successfully:", data);
            })
            .catch((error) => {
                // Handle any errors
                console.error("Error deleting project:", error);
            });
    };


    return (
        <>
            <Navbar />
            <div className="main_add_project">
                <h2>Edit Project</h2>
                <div className="project_details">
                    <ProjectForm project={project} handleInputChange={handleInputChange} />
                    <div className="input_con button_con">
                        <button onClick={handleUpdateProject}>Update Project</button>
                        <button>Cancel</button>
                    </div>
                </div>
                <button onClick={handleDeleteProject}>Delete</button>
            </div>
            <Footer />
        </>
    );
}
