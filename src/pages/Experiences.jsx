import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import "./Experiences.css";
import codebaseLogo from "../images/berkeley-codebase-logo.png";
import ngcLogo from "../images/ngc-logo-square.png";
import eecsLogo from "../images/uc_berkeley_eecs_logo.jpeg";

function Experiences() {
  return (
    <div id="experience-page" class="wrapper">
      <div id="experience-list">
        <center>
          <h2 class="experience-header">my experience</h2>
        </center>

        <ExperienceCard
          logo={codebaseLogo}
          company="Codebase | Open Heart Kitchen"
          role="Mentored Software Developer"
          dates="August 2023 - present"
          // text = "Designed and built a full stack web application for Open Heart Kitchen to organize and manage schedule employee shifts. Developed a dashboard, admin access model, and auto-assign shifts algorithm for employees. Built a mySQL and Express.js back-end for data fetching, sorting, and editing functionalities."
          text="Designed and constructed a comprehensive full-stack web application to streamline the organization/management of employee shift scheduling, featuring a user-friendly dashboard, admin access framework, and an automated shift assignment algorithm. Developed a robust backend infrastructure using MySQL and Express.js to efficiently retrieve, organize, and edit functionality, therefore ensuring the seamless execution of data management and scheduling operations."
        ></ExperienceCard>

        <ExperienceCard
          logo={ngcLogo}
          company="NextGen Consulting | Palantir Technologies"
          role="Senior Business Analyst"
          dates="August 2023 - present"
          text="Crafted and executed a comprehensive data sourcing strategy for Palantir&rsquo;s expense management, encompassing the collection
          of market rate data and calculation of facilities management rates of various Palantir locations (US, EU, ME, APAC). Reduced costs by building an intelligence layer that identifies key heuristics for discerning market costs, then finding specific
          levers that Palantir can take leverage of to optimize expenditure."
        ></ExperienceCard>


        <ExperienceCard
          logo={ngcLogo}
          company="NextGen Consulting | Abbott Laboratories"
          role="Business Analyst"
          dates="February 2023 - May 2023"
          text="Conducted extensive market research and analysis across 15+ neuromodulation indications to determine a short-term expansion strategy for Abbott&rsquo;s neuromodulation sector, as well as new indications for the company&rsquo;s existing projects/medical devices. Identified potential areas of growth/differentiation and gaps in product offerings through competitive analysis on 7 competitors. Heightened Abbott&rsquo;s customer engagement and market leader position with 5 key AI web platform integration proposals."
        ></ExperienceCard>

        <ExperienceCard
          logo={eecsLogo}
          company="UC Berkeley EECS Department"
          role="Academic Intern | CS 10"
          dates="January 2023 - August 2023"
          text="Supported 200+ computer science undergraduate students during 2-hour lab sections 2-3 times/week by guiding them through hands-on coding exercises, in order to solidify their understanding of course material and fundamental programming concepts."
        ></ExperienceCard>
      </div>

      <div class="skills-interests"></div>
    </div>
  );
}

export default Experiences;
