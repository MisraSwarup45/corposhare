import React from 'react';
import './CookiesPolicy.scss';
import Navbar from './Navbar';

const CookiesPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="cookies-policy-section">
        <div className="container">
          <h2 className="cookies-policy-heading">Cookies Policy</h2>
          <p className="cookies-policy-description">
            This website uses cookies to enhance your browsing experience and provide personalized services. By continuing to use our website, you consent to the use of cookies as outlined in this Cookies Policy.
          </p>
          <p className="cookies-policy-description">
            Cookies are small text files stored on your device when you visit a website. They help us analyze website traffic, remember your preferences, and improve our services. We may use both session cookies (which are deleted after you close your browser) and persistent cookies (which remain on your device for a specified period).
          </p>
          <p className="cookies-policy-description">
            We use cookies for various purposes, including but not limited to:
          </p>
          <ul className="cookies-policy-list">
            <li>Remembering your preferences and settings</li>
            <li>Analyzing website traffic and user behavior</li>
            <li>Providing personalized content and advertisements</li>
            <li>Monitoring and improving our website performance</li>
          </ul>
          <p className="cookies-policy-description">
            You have the option to accept or decline cookies through your browser settings. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, note that disabling cookies may impact your browsing experience and limit certain features of our website.
          </p>
          <p className="cookies-policy-description">
            We may also use third-party cookies from trusted partners for analytics, advertising, and other purposes. These third-party cookies are subject to their respective privacy policies.
          </p>
          <p className="cookies-policy-description">
            By using our website and accepting cookies, you consent to the terms of this Cookies Policy. We may update this policy periodically, and any changes will be posted on our website.
          </p>
          <p className="cookies-policy-description">
            If you have any questions or concerns regarding our Cookies Policy, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
