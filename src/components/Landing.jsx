import React from 'react';
import './Landing.css';
import user from '../images/user.png';
import { TypeAnimation } from 'react-type-animation';
import ContactIcons from './ContactIcons';


function Landing() {
    return ( 
        <div id="home">
        <div class="main-container">

        {/*           <img
            class="fade-in-image main-picture"
            src="https://cdn.glitch.global/9d1ee5f4-d9f8-4cf0-8fd0-0cd32e1533e1/sf-muni-main.jpeg?v=1656524485109"
            alt="SF Muni" */}
            <div class="landing-left">
                <img class="profile-pic" src={user}></img>
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
                 <p>I’m currently a student at UC Berkeley, pursuing a bachelor’s degree in Computer Science. ....
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </p>
                 <ContactIcons></ContactIcons>
            </div>
            </div>
            

        </div>
        </div>

        
    )
}

export default Landing; 