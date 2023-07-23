import React from 'react';
import { useSpring, animated } from 'react-spring';
import './LandingPage.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import LandingCat from './LandingCat';
import LandingAbout from './LandingAbout';
import doodle1 from '../img/doodle1.png'
import plane from '../img/plane.png'


const LandingPage = () => {
    const headerAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 500,
        config: { duration: 1000 },
    });

    const mainAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 1000,
        config: { duration: 1000 },
    });

    const footerAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 1500,
        config: { duration: 1000 },
    });

    return (
        <>
            <Navbar />
            {/* <div className="landing-page"> */}
                {/* <animated.header style={headerAnimation}>
                    <h1>CorpoShare</h1>
                    <p>Connecting Businesses and Professionals</p>
                </animated.header>
                <animated.main style={mainAnimation}>
                    <h2>Welcome to CorpoShare</h2>
                    <p>Discover the power of collaboration and find your next business venture.</p>
                    <button>Get Started</button>
                </animated.main>
                <animated.footer style={footerAnimation}>
                    <p>&copy; 2023 CorpoShare. All rights reserved.</p>
                </animated.footer> */}
                {/* <div className='home-content'>
                    <div className='tag1'>Building</div>
                    <div className='tag2'><strong>Together</strong></div>
                    <div className='tag3'>Collaborate, create and achieve together</div>

                    <button>Get Started</button>
                </div>
                <div className='doodle-div'>
                    <img className='doodle2' src={plane}></img>
                    <img className='doodle1' src={doodle1}></img>
                </div> */}

                {/* <div><img className='doodle1' src={doodle1}></img></div> */}
               
            {/* </div> */}
            <LandingCat />
            <LandingAbout />
            <Footer />

        </>
    );
};

export default LandingPage;
