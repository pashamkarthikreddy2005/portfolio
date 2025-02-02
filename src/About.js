import React from "react";
import './About.css';

const About = () => {
    const details = {
        name: 'Pasham Karthik Reddy',
        degree: 'B.Tech in CSE',
        college: 'Vardhaman College of Engineering',
        age: 20
    };

    return (
        <div className="aboutDetails">
            <div className="about-container">
                <h1 id="aboutMeText">About Me</h1>
                <p>
                    Hi, my name is Karthik, and I enjoy problem-solving, algorithms, Java, web development,
                    and exploring new technologies. I am currently pursuing my B.Tech in Computer Science and
                    Engineering at Vardhaman College of Engineering. Most of my experience involves backend
                    technologies (Java/Spring Boot) and frontend development (React). I have a strong interest in
                    DSA, web development, and cloud platforms. Currently, I’m working on improving my skills in
                    backend development and exploring AWS and Google Cloud.
                </p>
                Feel free to explore <a href="https://vardhamancoe-my.sharepoint.com/:b:/g/personal/pashamkarthikreddy22cs_student_vardhaman_org/EdxxN0YkC3RJqrXHl_GTZDsBBCuQX-AZesSYgh3a2th4UQ?e=aT46G5" target="_blank" rel="noreferrer">my detailed Resume</a> for more information about me.
            </div>

            <div className="Details">
                <h1 className="detailsHeading">Details</h1>
                <div className="detailsBox">
                    <pre>
{`{
`}
        <span className="key">name</span>: <span className="value">'{details.name}'</span>,
        <br/>
        <span className="key">degree</span>: <span className="value">'{details.degree}'</span>,
        <br/>
        <span className="key">college</span>: <span className="value">'{details.college}'</span>,
        <br/>
        <span className="key">age</span>: <span className="number">{details.age}</span>
        <br/>
{`}`}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default About;
