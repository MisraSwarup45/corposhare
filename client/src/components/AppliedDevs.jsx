import React, { useState } from 'react';
import './AppliedDevs.scss';
import Navbar from './Navbar';

const AppliedDevs = () => {
    // Replace this with your actual data fetching logic
    const [appliedEmployees, setAppliedEmployees] = useState([
        { id: 1, name: 'John Doe', status: 'Pending' },
        { id: 2, name: 'Jane Smith', status: 'Pending' },
        { id: 3, name: 'Michael Johnson', status: 'Pending' },
        // Add more employee data as needed
    ]);

    const handleStatusChange = (employeeId, newStatus) => {
        setAppliedEmployees((prevEmployees) =>
            prevEmployees.map((employee) =>
                employee.id === employeeId ? { ...employee, status: newStatus } : employee
            )
        );
    };

    return (
        <>
            <Navbar />
            <div className="applied-devs">
                <h2>Project Name - Admin Dashboard</h2>
                <h3>Applied Employees</h3>
                <ul>
                    {appliedEmployees.map((employee) => (
                        <li key={employee.id} className={`employee-row ${employee.status.toLowerCase()}`}>
                            {employee.name} - {employee.status}
                            <div>
                                <button onClick={() => handleStatusChange(employee.id, 'Accepted')}>
                                    Accept
                                </button>
                                <button onClick={() => handleStatusChange(employee.id, 'Not Accepted')}>
                                    Not Accept
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default AppliedDevs;
