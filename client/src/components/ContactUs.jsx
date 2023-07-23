import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.scss';
import Navbar from './Navbar';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="contact-form">
        <h2>Contact Us</h2>
        {isSent ? (
          <p className="success-message">Your message has been sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              />
            </div>
            <button type="submit" disabled={isSending}>
              {isSending ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
