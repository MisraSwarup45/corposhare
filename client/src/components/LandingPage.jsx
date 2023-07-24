import React from 'react';
import { useSpring, animated } from 'react-spring';
import './LandingPage.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import LandingCat from './LandingCat';
import LandingAbout from './LandingAbout';
import Home from './Home';
import doodle1 from '../img/doodle1.png'
import plane from '../img/plane.png'


const LandingPage = () => {

    return (
        <>
            <Navbar />
            <Home />
            <LandingCat />
            <LandingAbout />
            <Footer />
        </>
    );
};

export default LandingPage;
