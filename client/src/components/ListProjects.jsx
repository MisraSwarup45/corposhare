import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ListCard from './ListCard';
import './ListProjects.scss';

const ListProjects = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data as an array of objects
  const sampleData = [
    {
      id: 1,
      company: 'Sample Company 1',
      title: 'Sample Project 1',
      pay: '$1000',
      duration: '2 months',
      employees_required: 5,
      skills_req: ['Skill 1', 'Skill 2', 'Skill 3'],
      description: 'Sample description for Project 1',
      email: 'sample1@example.com',
      contact_number: '123-456-7890',
    },
    {
      id: 2,
      company: 'Sample Company 2',
      title: 'Sample Project 2',
      pay: '$800',
      duration: '1 month',
      employees_required: 3,
      skills_req: ['Skill 2', 'Skill 4'],
      description: 'Sample description for Project 2',
      email: 'sample2@example.com',
      contact_number: '987-654-3210',
    },
    // Add more sample data objects as needed
  ];

  useEffect(() => {
    // Commented out the API call and used the sample data instead
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(`http://${ip}/api/v1/projects/`);
    //     if (response.ok) {
    //       const fetchedData = await response.json();
    //       setData(fetchedData);
    //       setFilteredData(fetchedData);
    //       setLoading(false);
    //     } else {
    //       throw new Error('Failed to fetch data');
    //     }
    //   } catch (error) {
    //     console.log('Error:', error.message);
    //   }
    // };
    // fetchData();

    // Using the sample data instead of fetching from the API
    setData(sampleData);
    setFilteredData(sampleData);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Filter the data based on the search query
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="list-projects">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {loading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <span>Loading...</span>
          </div>
        ) : (
          <div className="list-projects__container">
            {filteredData.map((item) => (
              <ListCard
                key={item.id}
                id={item.id}
                company={item.company}
                title={item.title}
                pay={item.pay}
                duration={item.duration}
                employee_required={item.employees_required}
                skills={item.skills_req}
                description={item.description}
                email={item.email}
                contact_number={item.contact_number}
              />
            ))}
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ListProjects;
