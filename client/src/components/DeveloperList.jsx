import React, { useState, useEffect } from 'react';
import './DeveloperList.scss';
import Navbar from './Navbar';

const NewDeveloperList = () => {
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        fetch('http://144.126.220.247:8000/contributor')
            .then((res) => res.json())
            .then((developers) => setDevelopers(developers));
    }, []);

    return (
        <div>
            <Navbar /> {/* Use the updated component name here */}
            <div className="developer-list-container">
                <div className="developer-list-row">
                    {developers.map((developer) => (
                        <div key={developer.id} className="developer-list-col">
                            <div className="developer-card">
                                <div className="developer-card-body">
                                    <img
                                        src={developer.profile_pic}
                                        className="developer-card-img"
                                        alt="Developer"
                                    />
                                    <h5 className="developer-card-title">{developer.name}</h5>
                                    <h6 className="developer-card-subtitle">
                                        {developer.role}
                                    </h6>
                                    <p className="developer-card-text">{developer.skills}</p>
                                    {developer.stack.map((stack, index) => (
                                        <span
                                            key={index}
                                            className="developer-badge"
                                        >
                                            {stack}
                                        </span>
                                    ))}
                                    <a href="#" className="developer-card-link">
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewDeveloperList;
