import React, { useState, useEffect } from 'react';
import './CompanyList.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import ip from './ip';

const CompanyList = () => {
    // Commented out the API call and provided sample data as text
    // const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://${ip}/api/v1/companies/`);
                const fetchedData = await response.json();

                setData(fetchedData);
                // setLoading(false);
            } catch (error) {
                console.error('An error occurred while fetching the data.', error);
                // setLoading(false);
            }
        };

        fetchData();
    }, []);

    // console.log(data);

    // Sample data as text
    // const sampleData = [
    //     {
    //         id: 1,
    //         logo: 'https://loremflickr.com/320/320/company',
    //         name: 'Sample Company 1',
    //         email: 'sample1@example.com',
    //         location: 'Sample Location 1',
    //         founder: 'Sample Founder 1',
    //         employees: '100',
    //         year: '2005',
    //         valuation: '$1 billion',
    //         services: ['Service 1', 'Service 2', 'Service 3'],
    //         desc: 'Sample description for Company 1',
    //     },
    //     {
    //         id: 2,
    //         logo: 'https://loremflickr.com/320/320/company',
    //         name: 'Sample Company 2',
    //         email: 'sample2@example.com',
    //         location: 'Sample Location 2',
    //         founder: 'Sample Founder 2',
    //         employees: '200',
    //         year: '2010',
    //         valuation: '$500 million',
    //         services: ['Service 4', 'Service 5'],
    //         desc: 'Sample description for Company 2',
    //     },
    // ];

    return (
        <>
            <Navbar />
            <br></br>
            <div className="company-list">
                <div className="company-list__container">
                    {data.map((company) => (
                        <div className="company-card" key={company.id}>

                            <div className="company-card__details">
                                <div className='logo-name'>
                                    <div className="company-card__logo">
                                        <img src={company.logo} alt="Company Logo" />
                                    </div>
                                    <h2>{company.name}</h2>
                                </div>
                                <p>{company.description}</p>
                                <div className="company-card__info">
                                    <div className="info-item">
                                        <span>Email:</span> {company.email}
                                    </div>
                                    <div className="info-item">
                                        <span>Location:</span> {company.location}
                                    </div>
                                    <div className="info-item">
                                        <span>Founder:</span> {company.founder}
                                    </div>
                                    <div className="info-item">
                                        <span>Employees:</span> {company.employees}
                                    </div>
                                    <div className="info-item">
                                        <span>Year Established:</span> {company.year}
                                    </div>
                                    <div className="info-item">
                                        <span>Valuation:</span> {company.valuation}
                                    </div>
                                    <div className="info-item">
                                        <span>Services:</span> {Array.isArray(company.services) ? company.services.join(', ') : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CompanyList;