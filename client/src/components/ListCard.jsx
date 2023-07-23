import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './ListCard.scss';

const ListCard = ({ id, company, title, pay, duration, employee_required, skills, email, contact_number }) => {
  return (
    <div className="list-card">
      <div className="list-card__info">
        <h2 className="list-card__company">{company}</h2>
        <h1>{id}</h1>
        <p className="list-card__title">{title}</p>
        <p className="list-card__pay">Pay: {pay}</p>
        <p className="list-card__duration">Duration: {duration}</p>
        <p className="list-card__employee-required">Employee Required: {employee_required}</p>
        <p className="list-card__skills">Skills: {skills}</p>
        <div className="list-card__contact">
          <div className="list-card__contact-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <p>{email}</p>
        </div>
        <div className="list-card__contact">
          <div className="list-card__contact-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p>{contact_number}</p>
        </div>
        <Link className='links-project' to={`project-details/${id}`}>
          <button className="list-card__button">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

ListCard.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pay: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  employee_required: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  contact_number: PropTypes.string.isRequired,
};

export default ListCard;
