import React from "react";
import "./ContactIcons.css";
import linkedinLogo from "../images/linkedin-logo.png";
import githubLogo from "../images/github-logo.png";
import gmailLogo from "../images/gmail-logo.png";

import { TypeAnimation } from "react-type-animation";

function ContactIcons() {
  return (
    <div class="contact-icons">
      {/* linkedin */}
      <a
        href="https://www.linkedin.com/in/nicole-martinez-52n4"
        target="_blank"
      >
        <img class="linkedin" src={linkedinLogo}></img>
      </a>

      {/* github */}
      <a href="https://github.com/nicole-martinez" target="_blank">
        <img class="github" src={githubLogo}></img>
      </a>

      {/* gmail */}
      <a href="mailto:nicole.martinez@berkeley.edu" target="_blank">
        <img class="gmail" src={gmailLogo}></img>
      </a>
    </div>
  );
}

export default ContactIcons;
