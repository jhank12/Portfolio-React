import { useState } from "react";

import Navbar from "./Components/Navbar";
import SkillsSection from "./Components/Sections/SkillsSection";
import ProjectsSection from "./Components/Sections/ProjectsSection";

import pdf from "./Resume/Joshua Hankins Resume.pdf";

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
        <section className="landingSection" id="home">
          <Navbar scrollToElement={scrollToElement} />

          <div>
            <h1>
              Joshua Hankins <br />{" "}
              <span className="coloredText">Frontend Developer</span>
            </h1>
            <button onClick={() => scrollToElement("skills")}>See More</button>
          </div>
        </section>

        <SkillsSection id={"skills"} />

        <ProjectsSection id={"projects"} />
      </section>

      <footer>
        <div className="footerContent">
          {/* <h4>
            Joshua Hankins <br />{" "}
            <span className="coloredText">Frontend Developer</span>
          </h4> */}

          <div className="footerNavsContainer">
            <div className="footerNav">
              <h5>Page Links</h5>
              <ul>
                <li>
                  <a onClick={() => scrollToElement("home")}>Home</a>
                </li>
                <li>
                  <a onClick={() => scrollToElement("skills")}>Skills</a>
                </li>
                <li>
                  <a onClick={() => scrollToElement("projects")}>Projects</a>
                </li>
                <li>
                  <a href={pdf} rel="noreferrer" target="_blank">
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            <div className="footerNav">
              <h5>Other Links</h5>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/joshuaahankins/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/jhank12"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;


// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// fix image carousel
// button hover 
