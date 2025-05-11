import React from "react";
import "./Profiles.css";

const Profiles = () => {
    return (
        <div className="profilesContainer">
            <h1 className="profileHead">Coding Profiles</h1>

            <div className="profile">
                <div className="profileName">
                    <img src="leetcode.webp" alt="LeetCode Logo" />
                    <p style={{ color: "white" }}><strong>LeetCode</strong></p>
                </div>
                <div className="description">
                    <p style={{ color: "#a4c591" }}><strong>Problems Solved:</strong> 751</p>
                    <p style={{ color: "#a4c591" }}><strong>Contest Rating:</strong> 1732</p>
                </div>
                <div className="profileId">
                    <p style={{ color: "#a4c591" }}><strong>Id:</strong><a href="https://leetcode.com/u/pashamkarthikreddy2005/" target="_blank" rel="noreferrer"><b>pashamkarthikreddy2005</b></a></p>
                </div>
            </div>


            <div className="profile">
                <div className="profileName">
                    <img src="codechef.webp" alt="CodeChef Logo" />
                </div>
                <div className="description">
                    <p style={{ color: "#a4c591" }}><strong>Contest Rating:</strong> 1492</p>
                </div>
                <div className="profileId">
                    <p style={{ color: "#a4c591" }}><strong>Id:</strong><a href="https://www.codechef.com/users/p_karthik_18" target="_blank" rel="noreferrer"><b>p_karthik_18</b></a></p>
                </div>
            </div>

            <div className="profile">
                <div className="profileName">
                    <img src="codeforces.png" alt="CodeForces Logo" />
                </div>
                <div className="description">
                    <p style={{ color: "#a4c591" }}><strong>Contest Rating:</strong> 979</p>
                </div>
                <div className="profileId">
                <p style={{ color: "#a4c591" }}><strong>Id:</strong><a href="https://codeforces.com/profile/pashamkarthikreddy2005" target="_blank" rel="noreferrer"><b>pashamkarthikreddy2005</b></a></p>
                </div>
            </div>
        </div>
    );
};

export default Profiles;
