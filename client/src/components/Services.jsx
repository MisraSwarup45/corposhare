import React from 'react';
import './Services.scss';
import Navbar from './Navbar';

const Services = () => {
    return (
        <div>
            <Navbar />
            <div className="services-section">
                <div className="container">
                    <h2 className="services-heading">Our Services</h2>
                    <div className="service-card">
                        <img src="https://loremflickr.com/320/240/workspace" alt="Workspace" className="service-icon" />
                        <h3 className="service-title">Flexible Workspaces</h3>
                        <p className="service-description">
                            We offer a range of flexible workspaces, including private offices, coworking spaces, and meeting rooms. Choose the perfect workspace that suits your needs and enjoy a professional environment to work and collaborate.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src="https://loremflickr.com/320/240/amenities" alt="Amenities" className="service-icon" />
                        <h3 className="service-title">Modern Amenities</h3>
                        <p className="service-description">
                            Our workspaces are equipped with modern amenities, such as high-speed internet, comfortable furniture, conference facilities, and complimentary refreshments. Focus on your work while we take care of the essentials.
                        </p>
                    </div>
                    <div className="service-card">
                        <img src="https://loremflickr.com/320/240/community" alt="Community" className="service-icon" />
                        <h3 className="service-title">Vibrant Community</h3>
                        <p className="service-description">
                            Join our vibrant community of professionals and entrepreneurs. Network, collaborate, and learn from like-minded individuals. Attend events, workshops, and seminars to enhance your skills and expand your horizons.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
