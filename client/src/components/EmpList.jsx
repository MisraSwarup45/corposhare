import React, { useState, useEffect } from 'react';
import './EmpList.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ip from './ip';

const EmpList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${ip}/api/v1/employees/`);
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('An error occurred while fetching the data.', error);
      }
    };

    fetchData();
  }, []);

  console.log(employees);

  // Sample data for testing
  // const sampleData = [
  //   {
  //     id: 1,
  //     name: 'Mridul Singhal',
  //     email: 'mridulsinghal474@gmail.com',
  //     profile_pic: 'https://loremflickr.com/320/320',
  //     age: 20,
  //     sex: 'Male',
  //     education: 'B.tech',
  //     skills: 'vneujgberubguerbg',
  //     experience: 2,
  //     resume: 'https://example.com/resume1.pdf',
  //     department: 'CSE',
  //     contact: 'erheh5reheh',
  //     hire_date: '2023-06-10',
  //     company: 1,
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Smith',
  //     email: 'janesmith@example.com',
  //     profile_pic: 'https://loremflickr.com/320/320',
  //     age: 28,
  //     sex: 'Female',
  //     education: 'B.Sc.',
  //     skills: 'Programming, Problem-solving, Teamwork',
  //     experience: 5,
  //     resume: 'https://example.com/resume2.pdf',
  //     department: 'IT',
  //     contact: '987-654-3210',
  //     hire_date: '2020-09-22',
  //     company: 1,
  //   },
  //   {
  //     id: 3,
  //     name: 'Mike Johnson',
  //     email: 'mikejohnson@example.com',
  //     profile_pic: 'https://loremflickr.com/320/320',
  //     age: 35,
  //     sex: 'Male',
  //     education: 'Ph.D.',
  //     skills: 'Research, Data Analysis, Technical Writing',
  //     experience: 10,
  //     resume: 'https://example.com/resume3.pdf',
  //     department: 'Research and Development',
  //     contact: '555-123-4567',
  //     hire_date: '2015-06-10',
  //     company: 2,
  //   },
  // ];

  // useEffect(() => {
  //   setEmployees(sampleData);
  // }, []);

  return (
    <div className="emp-list-container">
      <h1 className="emp-list">Employee List</h1>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Skills</th>
            <th>Experience</th>
            <th>Resume</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <Link to={`/emp-profile/${employee.id}`}><td>{employee.name}</td></Link>
              <td>{employee.email}</td>
              <td>{employee.skills}</td>
              <td>{employee.experience}</td>
              <td>
                <a href={employee.resume}>Link</a>
              </td>
              <td>{employee.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpList;
