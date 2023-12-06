import { useState } from "react";

import Navbar from "./Components/Navbar";
import SkillsSection from "./Components/Sections/SkillsSection";
import ProjectsSection from "./Components/Sections/ProjectsSection";

function App() {
  return (
    <section className="siteContainer">
      <section className="landingSection">
        <Navbar />

        <div>
          <h1>
            Joshua Hankins <br />{" "}
            <span className="coloredText">Frontend Developer</span>
          </h1>
          <button>See More</button>
        </div>
      </section>

      <SkillsSection />

      <ProjectsSection />

      
    </section>
  );
}

export default App;
