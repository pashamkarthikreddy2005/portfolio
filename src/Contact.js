import React from "react";
import "./Contact.css";
import 'font-awesome/css/font-awesome.min.css'; // Import font-awesome styles

const Contact = () => {
    return (
        <div className="contactContainer">
            <h1>You Can Find Me Here</h1>
            <div className="iconsContainer">
                <a id="mail" href="mailto:pashamkarthikreddy2005@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope"></i>
                </a>
                <a id="linkedIn" href="https://www.linkedin.com/in/pasham-karthik-reddy/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a id="git" href="https://github.com/pashamkarthikreddy2005" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                </a>
                <a id="insta" href="https://www.instagram.com/pasham_karthik_reddy?igsh=emJ5dXcwaHVzZGpx" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                </a>
            </div>
        </div>
    );
};

export default Contact;
