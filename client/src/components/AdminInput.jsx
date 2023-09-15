import React, { useState } from 'react';
import './AdminInput.scss';

function AdminInput() {
    const [formData, setFormData] = useState({
        id: 2,
        name: 'Swarup',
        education: 'srm',
        experience: ["HI"],
        created_at: '',
        updated_at: '',
        is_active: false,
        user_id: 3,
        user: {
            id: 3,
            email: ''
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://146.190.121.119:8000/padmins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Data successfully posted.');
                // Reset the form or perform any other necessary actions.
            } else {
                console.error('Error posting data.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="admin-input">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />

                <label>Education:</label>
                <input
                    type="text"
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    required
                />

                <label>Experience:</label>
                <input
                    type="text"
                    value={formData.experience[0]}
                    onChange={(e) => setFormData({ ...formData, experience: [e.target.value] })}
                    required
                />


                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AdminInput;
