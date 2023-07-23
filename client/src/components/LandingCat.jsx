import React from 'react';
import "./LandingCat.scss"
// import {BsCodeSlash} from "react-icons/bs"
import {FcBullish, FcWorkflow, FcFeedIn, FcMoneyTransfer, FcCollaboration, FcAssistant, FcCollect, FcCurrencyExchange} from "react-icons/fc"


const LandingCat = () => {
    return (
        <div>
            <section class="home-category">
                <div class="header">
                    <h1>Our platform provides a wide variety of advantages</h1>
                   
                </div>
                <div class="list">
                    <div class="one">
                        <div class="card">
                            <div class="icon">
                                <FcCollect/>
                            </div>
                            <div class="text">
                                <h1>Access to a Diverse Talent Pool</h1>
                                <p>Gain access to a vast network of skilled professionals across various industries and domains. Our platform connects you with a diverse pool of talent, allowing you to tap into specialized expertise and find the right professionals to meet your specific project needs.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <FcWorkflow/>
                            </div>
                            <div class="text">
                                <h1>Flexible Workforce Solutions</h1>
                                <p>Embrace flexibility by easily scaling your workforce up or down based on project demands. Our platform enables you to engage full-time professionals on a project-specific or temporary basis, allowing you to optimize resource allocation and reduce overhead costs.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <FcFeedIn/>
                            </div>
                            <div class="text">
                                <h1>Rapid Talent Acquisition</h1>
                                <p>Streamline your talent acquisition process and reduce time-to-hire. Our platform provides efficient tools for posting job opportunities, screening candidates, and managing the hiring process, ensuring you find the right professionals quickly and efficiently.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <FcBullish/>
                            </div>
                            <div class="text">
                                <h1>Career Growth and Flexibility</h1>
                                <p>For professionals, our platform provides opportunities for career growth, skills enhancement, and work-life balance. By connecting with organizations on a project basis, individuals can expand their professional network, work on diverse projects, and enjoy the flexibility of choosing projects that align with their expertise and career aspirations.</p>
                            </div>
                        </div>
                    </div>
                    <div class="one">
                        <div class="card">
                            <div class="icon">
                                <FcMoneyTransfer/>
                            </div>
                            <div class="text">
                                <h1>Cost Efficiency</h1>
                                <p>Maximize cost savings by avoiding long-term commitments and overhead expenses associated with full-time employees. With our platform, you can engage professionals on a project basis, eliminating the need for permanent staffing while still accessing top-notch talent.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <FcAssistant/>
                            </div>
                            <div class="text">
                                <h1>Expertise On-Demand</h1>
                                <p>Quickly fill skill gaps and access specialized expertise as and when needed. Our platform enables you to find professionals with specific skills, industry knowledge, and experience, allowing you to tackle complex projects with confidence and efficiency.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <FcCollaboration/>
                            </div>
                            <div class="text">
                                <h1>Enhanced Collaboration and Productivity</h1>
                                <p>Foster collaboration and productivity by leveraging our platform's communication and project management features. Easily coordinate with professionals, share files and updates, and track project progress in real-time, ensuring seamless collaboration and efficient workflows.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <FcCurrencyExchange/>
                            </div>
                            <div class="text">
                                <h1>Streamlined Payments and Contracts</h1>
                                <p>Simplify payment processes and ensure transparency with our platform's integrated payment and contract management system. Set up secure payment arrangements, track project milestones, and streamline contract agreements, making the entire process efficient and hassle-free.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingCat;