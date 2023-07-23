import React, { useEffect, useState } from 'react';
import './EmpProfile.scss';
import { useParams, Link } from 'react-router-dom';
import ip from './ip';
import Navbar from './Navbar';
import Footer from './Footer';

const EmpProfile = () => {
    const [employee, setEmployee] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://${ip}/api/v1/employee/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setEmployee(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDelete = (e) => {
        e.preventDefault();
        console.log('Delete button clicked!');
        fetch(`http://${ip}/api/v1/employee/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Employee deleted successfully:', data);
                setEmployee({
                    name: '',
                    email: '',
                    profile_pic: '',
                    age: '',
                    sex: '',
                    education: '',
                    skills: '',
                    experience: '',
                    resume: '',
                    department: '',
                    contact: '',
                    hire_date: '',
                    company: '',
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="emp-profile">
                <h2 className="emp-profile__title">Employee Profile</h2>
                <p className="emp-profile__info">Name: {employee.name}</p>
                <p className="emp-profile__info">Email: {employee.email}</p>
                <img className="emp-profile__image" src={employee.profile_pic} alt="Profile Picture" />
                <p className="emp-profile__info">Age: {employee.age}</p>
                <p className="emp-profile__info">Sex: {employee.sex}</p>
                <p className="emp-profile__info">Education: {employee.education}</p>
                <p className="emp-profile__info">Skills: {employee.skills}</p>
                <p className="emp-profile__info">Experience: {employee.experience} years</p>
                <p className="emp-profile__info">Resume: <a href={employee.resume}>Download</a></p>
                <p className="emp-profile__info">Department: {employee.department}</p>
                <p className="emp-profile__info">Contact: {employee.contact}</p>
                <p className="emp-profile__info">Hire Date: {employee.hire_date}</p>
                <p className="emp-profile__info">Company: {employee.company}</p>
                <div className=''>
                    <button className="emp-profile__btn emp-profile__btn-delete" onClick={handleDelete}>
                        Delete
                    </button>
                    <Link to={`/emp-profile/edit/${id}`}>
                        <button className="emp-profile__btn emp-profile__btn-edit">Edit</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EmpProfile;
