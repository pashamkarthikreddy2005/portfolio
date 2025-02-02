import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projectsContainer">
            <h1>Latest repositories on GitHub</h1>
            <div className="project">
                <h4><a href="https://github.com/pashamkarthikreddy2005/insuranceClaim" target="blank" rel="noreferrer">MassMutual Insurance Claim</a></h4>
                <h5>Insurance claim case study</h5>
                <p className="date">Updated: Mon, October 27 2024</p>
            </div>
            <div className="project">
                <h4><a href="https://github.com/pashamkarthikreddy2005/Raithanna-Market" target="blank" rel="noreferrer">Raithu bazaar</a></h4>
                <h5>An E-Commerce site</h5>
                <p className="date">Updated: Sun, Dec 22 2024</p>
            </div>
        </div>
    );
};

export default Projects;
