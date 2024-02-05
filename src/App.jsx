import { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import SkillsSection from "./Components/Sections/SkillsSection/SkillsSection";
import ProjectsSection from "./Components/Sections/ProjectsSection/ProjectsSection";
import Footer from "./Components/Sections/Footer/Footer";
import LandingSection from "./Components/Sections/LandingSection/LandingSection";

function App() {
  function scrollToElement(id) {
    const element = document.getElementById(id);

    if (id) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <section className="siteContainer">
        <LandingSection scrollToElement={scrollToElement} />

        <SkillsSection />

        <ProjectsSection />
      </section>

      <Footer scrollToElement={scrollToElement} />
    </>
  );
}

export default App;
