import React, { useState } from 'react';
import './ChooseOptions.scss';

const ChooseOptions = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="choose-options-wrapper">
            <div className="choose-options-container">
                <div
                    className={`option-side ${selectedOption === 'developer' ? 'selected' : ''
                        }`}
                    onClick={() => handleOptionClick('developer')}
                >
                    <h2>Join as a Developer</h2>
                    <button className="join-as-developer-btn">Join Now</button>
                </div>
                <div
                    className={`option-side ${selectedOption === 'admin' ? 'selected' : ''
                        }`}
                    onClick={() => handleOptionClick('admin')}
                >
                    <h2>Join as a  Admin</h2>
                    <button className="join-as-admin-btn">Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default ChooseOptions;
