import React from "react";
import GalaxyBackground from "./GalaxyBackground";
import About from "./About";
import Profiles from "./Profiles";
import "./App.css"
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
    return (
      <div style={{ position: "relative", minHeight: "100vh", overflow: "auto" }}>
            <GalaxyBackground />
            <div style={{ position: "relative", zIndex: 2 }}>
              <About />
            </div>
            <div style={{marginTop:"100px"}}>
            <Profiles />
            </div>
            <div style={{marginTop:"100px"}}>
            <Skills />
            </div>
            <div style={{marginTop:"100px"}}>
            <Projects />
            </div>
            <div style={{marginTop:"100px"}}>
            <Contact />
            </div>
        </div>
    );
};

export default App;
