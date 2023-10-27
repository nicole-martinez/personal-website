import React from 'react';
import './ProjectCard.css';


function ProjectCard(props) {

    const { title, text, githubLink} = props;
    const sentences = text.split('. ').filter(Boolean);
    
    return (
        <div class="card w-100 fade-in-card">
            <div id="project-card-wrap" class="card-body">
                <h5 id="project-title" class="card-title">{title}</h5>
                <p class="card-text">{text}</p>
                {/* <a href={githubLink} class="btn btn-primary">Link</a> */}
            </div>
        </div>
       
    );
    
}

export default ProjectCard;