import React from 'react';
import './Contacts.css';
import blob from '../images/greenblob.png';
import waves from '../images/wave.svg';

// <img id="blob" src={blob} alt="mint green blob" />

function ContactPage() {
    return ( 
        <div id="contact-page">
            <div class="contact-main-div">
                <h2 class="contact-header">contact</h2>
                <div id="invite">
                    <h4>feel free to contact me!</h4>
                    <h3>nicole.martinez@berkeley.edu</h3>
                </div>
        </div>
        {/* <object id="wave" data={waves}></object> */}

        </div> 
        
        


       
    )
} 

export default ContactPage;