import React from 'react';
import './About.scss';
import Navbar from './Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about-section">
                <h1>About Us</h1>
            </div>
            <div className='our-mission'>
                <div className='mission-heading'>Our Mission</div>
                <div className='mission-content'>
                    Our goal at our full-time employee sharing platform is to transform business collaboration and workforce optimisation. Our goal is to link businesses with a sizable network of highly qualified individuals so they can effectively use talent and resources, change with the times, and expand their businesses.
                    We are dedicated to building a dynamic and adaptable work environment where individuals can discover rewarding opportunities that are in line with their skills and career aspirations and businesses may access a varied pool of competent employees. Our platform works to close the talent gap by enabling businesses to access the appropriate people at the right time and giving professionals rewarding job options.
                </div>
            </div>
            <div className='our-vision'>
                <div className='mission-heading'>Our Vision</div>
                <div className='mission-content'>
                    Our vision for full-time employee sharing is to create a dynamic and flexible workforce ecosystem where organizations seamlessly collaborate to optimize talent utilization. By fostering a culture of shared resources, we aim to maximize productivity, minimize underutilization, and unlock the full potential of employees. Through innovative platforms and collaborative partnerships, we envision a future where businesses can efficiently share skilled professionals, enabling cost-effective solutions, enhanced agility, and mutual growth. Our vision is to revolutionize the way organizations approach talent management, empowering companies to thrive in an evolving and interconnected global economy.
                </div>
            </div>
            <div className='our-values'>
                <div className='mission-heading'>Our Values</div>
                <div className='mission-content'>
                    At CorpoShare, our full-time employee sharing platform is built on the values of collaboration, efficiency, flexibility, fairness, growth, trust, and innovation. We believe in harnessing the power of collaboration to optimize workforce utilization, while providing businesses and employees with flexible opportunities to adapt and grow. Through transparent and equitable practices, we foster a culture of trust, enabling businesses to leverage a dynamic and versatile workforce. Our commitment to innovation drives us to continually enhance the full-time employee sharing experience, empowering organizations to thrive in a rapidly evolving landscape.                </div>
            </div>
            <div className='our-team-heading'>Our Team</div>
            <div className='main-box'>
                <div className='our-team'>
                    <div className='member'>Karan</div>
                    <div className='member'>Mridul</div>
                    <div className='member'>Swarup</div>
                </div>
            </div>
        </div>
    );
};

export default About;
