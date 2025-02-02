import React from "react";
import "./Skills.css";

const Skills = () => {
    const programmingSkills = [
        { name: "Java", rating: 4.5 },
        { name: "Javascript", rating: 3.5 },
        { name: "HTML", rating: 5 },
        { name: "CSS", rating: 4 },
        { name: "C++", rating: 3 },
    ];

    const toolsTechnologies = [
        { name: "React", rating: 3.5 },
        { name: "SpringBoot", rating: 4 },
        { name: "AWS", rating: 3 },
        { name: "SQL Databases", rating: 3.5 },
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0 ? "★" : "";
        return "★".repeat(fullStars) + halfStar + "☆".repeat(5 - fullStars - halfStar.length);
    };

    return (
        <div className="Skills">
            <h1 className="skillsHead">Skills</h1>
            <div className="PnT">
                <div className="column">
                    <h3 className="category">Programming Languages:</h3>
                    <pre className="codeBlock">
                        <span className="brackets">{"{"}</span>
                        {programmingSkills.map((skill, index) => (
                            <div key={index} className="skillRow">
                                <span className="skillName">{skill.name}:</span>
                                <span className="stars">{renderStars(skill.rating)},</span>
                            </div>
                        ))}
                        <span className="brackets">{"}"}</span>
                    </pre>
                </div>

                <div className="column">
                    <h3 className="category">Tools & Technologies:</h3>
                    <pre className="codeBlock">
                        <span className="brackets">{"{"}</span>
                        {toolsTechnologies.map((tool, index) => (
                            <div key={index} className="skillRow">
                                <span className="skillName">{tool.name}:</span>
                                <span className="stars">{renderStars(tool.rating)},</span>
                            </div>
                        ))}
                        <span className="brackets">{"}"}</span>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Skills;
