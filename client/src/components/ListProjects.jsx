import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ListCard from './ListCard';
import './ListProjects.scss';
import ip from './ip';

const ListProjects = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${ip}/api/v1/projects/`);
        if (response.ok) {
          const fetchedData = await response.json();
          setData(fetchedData);
          setFilteredData(fetchedData);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.log('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  console.log(data);

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
            {filteredData.map((item, index) => (
              <ListCard
                key={index}
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
