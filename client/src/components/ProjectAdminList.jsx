import React, { useEffect, useState } from 'react';
import './ProjectAdminList.scss';

const ProjectAdminList = () => {
    const [projectAdmins, setProjectAdmins] = useState([]);

    useEffect(() => {
        // Fetch data from the endpoint using the Fetch API
        fetch('http://146.190.121.119:8000/padmins')
            .then((response) => response.json())
            .then((data) => {
                // Update the state with the fetched data
                setProjectAdmins(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="project-admin-list">
            <h1>Project Admins</h1>
            <ul>
                {projectAdmins.map((admin) => (
                    <li key={admin.id}>
                        <h2>{admin.name}</h2>
                        <p>Education: {admin.education}</p>
                        <p>Experience: {admin.experience.join(', ')}</p>
                        <p>Email: {admin.user.email}</p>
                        {/* {admin.is_status ? (
                            <button className="round-button true"></button>
                        ) : (
                            <button className="round-button false"></button>
                        )} */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectAdminList;
