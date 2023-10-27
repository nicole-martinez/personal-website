import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const { company, role, dates, text, logo } = props;
  const sentences = text.split(". ").filter(Boolean);

  return (
    <div class="card w-100 fade-in-card">
      <div class="company-logo">
        <img class="card-logo" src={logo}></img>
      </div>
      <div class="card-body">
        <h4 class="card-title">{company}</h4>
        <p class="card-subtitle">{role}</p>
        <p class="card-text">{text}</p>
        {/* <a href="#" class="btn btn-primary">Button</a> */}
      </div>
    </div>
  );
}

export default ExperienceCard;
