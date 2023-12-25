import React from 'react';
import './Landing.css';
import user from '../images/user.png';
import { TypeAnimation } from 'react-type-animation';
import ContactIcons from './ContactIcons';
import profpic from '../images/prof-pic.jpg';
import profsq from '../images/prof-sq.jpeg';



function Landing() {
    return ( 
        <div id="home">
        <div class="main-container">

        {/*           <img
            class="fade-in-image main-picture"
            src="https://cdn.glitch.global/9d1ee5f4-d9f8-4cf0-8fd0-0cd32e1533e1/sf-muni-main.jpeg?v=1656524485109"
            alt="SF Muni" */}
            <div class="landing-left">
                <div class="circular-portrait center-cropped">
                    <img class="profile-pic prof-image" src={profsq}></img>
                </div>
            </div>

            <div class="landing-right intro-content">
                <TypeAnimation
                    sequence={[
                        'hello, my name is nicole nicole', 
                        1000,
                        'hello, my name is nicole.', 
                        1000,
                        'hello, my name is nicole!', 
                        4000,
                        'hello, my name is nicole! :)', 
                        4000,
                        'hello, my name is nicole!', 
                    ]}
                    speed={30}
                    style={{ fontSize: '2em' }}
                    repeat={0}
                />
                <div class="hook fade-in-text">
                 {/* <h2 class="typing-demo"> hello, my name is nicole!</h2> */}
                 <p>I’m currently a student at UC Berkeley, pursuing a bachelor’s degree in Computer Science. As someone with a passion for learning, I am excited to explore new opportunities to learn and grow, both inside and outside the classroom. I'm excited to explore new opportunities that challenge me and help me develop both professionally and personally.
                 </p>
                 <ContactIcons></ContactIcons>
            </div>
            </div>
            

        </div>
        </div>

        
    )
}

export default Landing; 