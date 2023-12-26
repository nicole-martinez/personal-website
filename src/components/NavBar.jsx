import React, { useState } from "react";
import "./NavBar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home"); // Initialize the active link

  // Function to handle button clicks and set the active link
  const handleButtonClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar-div">
      <nav className="nav nav-pills nav-fill">
        <h3 className="nav-name">nicole martinez</h3>
        <a
          className={`nav-link ${activeLink === "home" ? "active" : ""}`}
          aria-current="page"
          href="#"
          onClick={() => handleButtonClick("home")}
        >
          home
        </a>
        <a
          className={`nav-link ${activeLink === "experience" ? "active" : ""}`}
          href="#experience-page"
          onClick={() => handleButtonClick("experience")}
        >
          experience
        </a>
        <a
          className={`nav-link ${activeLink === "projects" ? "active" : ""}`}
          href="#project-page"
          onClick={() => handleButtonClick("projects")}
        >
          projects
        </a>
        <a
          className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
          href="#contact-page"
          onClick={() => handleButtonClick("contact")}
        >
          contact
        </a>
      </nav>
    </div>
  );
}

export default Navbar;

//   return (

//     <div class="navbar-div">
//       <nav class="nav nav-pills nav-fill">
//         <h3 class="nav-name">nicole martinez</h3>
//           <a class="nav-link active" aria-current="page" href="#">home</a>
//           <a class="nav-link" href="#experience-page">experience</a>
//           <a class="nav-link" href="#project-page">projects</a>
//           <a class="nav-link" href="#contact-page">contact</a>
//         {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>  */}
//       </nav>
//     </div>

//   );
// }
