import React from 'react';
import './TermsOfUse.scss';
import Navbar from './Navbar';

const TermsOfUse = () => {
    return (
        <div>
            <Navbar />
            <div className="terms-of-use-section">
                <div className="container">
                    <h2 className="terms-of-use-heading">Terms of Use</h2>
                    <p className="terms-of-use-description">
                        Welcome to CorpoShare! By accessing and using our website, you agree to comply with the following terms and conditions outlined in this Terms of Use agreement.
                    </p>
                    <p className="terms-of-use-description">
                        The content provided on our website is for general information purposes only. We strive to ensure its accuracy, but we make no guarantees or warranties regarding its completeness or suitability for any specific purpose.
                    </p>
                    <p className="terms-of-use-description">
                        You are solely responsible for any actions you take based on the information provided on our website. We are not liable for any damages or losses arising from the use of our website or the information contained therein.
                    </p>
                    <p className="terms-of-use-description">
                        Our website may contain links to third-party websites. These links are provided for your convenience, but we have no control over the content or privacy practices of those websites. We are not responsible for any damages or losses resulting from your use of these third-party websites.
                    </p>
                    <p className="terms-of-use-description">
                        You agree not to engage in any unauthorized activities on our website, including but not limited to hacking, spamming, or transmitting any harmful or illegal content. We reserve the right to terminate your access to our website if you violate these terms of use.
                    </p>
                    <p className="terms-of-use-description">
                        We may update these terms of use periodically, and any changes will be posted on our website. By continuing to use our website after any modifications, you agree to be bound by the updated terms of use.
                    </p>
                    <p className="terms-of-use-description">
                        If you have any questions or concerns regarding our Terms of Use, please contact our support team.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
