import React from 'react';
import doodleimg from '../img/doodle.png';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='boxi-outer'>
            <div class="boxi">
                <div class="text">
                    <div className='inner-text'>
                        <div class="tagi1">Discover</div>
                        <div class="tagi2">And Build Together with <div class="tagi5">Us</div>
                        </div>
                        <div class="tagi3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quasi ipsum quo
                            impedit minima pariatur incidunt? Magni accusamus nobis, saepe esse aliquam dicta architecto dolores
                            asperiores, error accusantium placeat reprehenderit.</div>
                        <div class="tagi4">Know More</div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="arrow" width="190" height="24" viewBox="0 0 211 24"
                            fill="none">
                            <path
                                d="M210.061 13.0606C210.647 12.4748 210.647 11.5251 210.061 10.9393L200.515 1.39333C199.929 0.80754 198.979 0.80754 198.394 1.39333C197.808 1.97911 197.808 2.92886 198.394 3.51465L206.879 11.9999L198.394 20.4852C197.808 21.071 197.808 22.0207 198.394 22.6065C198.979 23.1923 199.929 23.1923 200.515 22.6065L210.061 13.0606ZM0.000305176 13.4999L209 13.4999V10.4999L0.000305176 10.4999L0.000305176 13.4999Z"
                                fill="#00458A" />
                        </svg>
                    </div>
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                </div>
            </div>
            <div className='inner-boxi'>
                <div class="tagi6">COLLOBORATE</div>
                <div class="tagi7">CREATE</div>
                <div class="tagi8">& achieve together</div>
                <div class="doodle-boxi">
                    <img className='doodleimg' src={doodleimg}></img>
                </div>

                <div class="button-containeri">
                    <Link to={"/login"}><button class="button-log-in">Log In</button></Link>
                    <Link to={"/signup"}><button class="button-sign-up">Sign Up</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home