import React from "react";

import "/src/projectsSection.css";

const ProjectsSection = () => {
  const testArr = [];
  for (let i = 0; i < 10; i++) {
    testArr.push(i);
  }

  return (
    <section className="contentSection">
      <h2>Projects</h2>

      <div className="projectsContainer">
        {/* left side navigation */}
        <nav className="projectsNav">
          <ul>
            <li>Calendar</li>
            <li>E-Commerce</li>
            <li>Tip Calculator</li>
            <li>Pixel Art Editor</li>
          </ul>
        </nav>

        <div className="projectsList">
          {/* render each project in this this. projects list should be scrollable */}
          {/* {testArr.map((i) => {
            return (
              <div key={i}className="project">
                <h2>Calendar</h2>

                <div className="projectImageGallery">image gallery</div>

                <div>
                  <p>Technology used: HTML, CSS, Javascript</p>

                  <button>Live Site</button>
                  <a href="">Source Code</a>
                </div>

                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa nemo aliquid, modi deleniti enim saepe. Nisi blanditiis
                  sequi non ipsum debitis maxime omnis eveniet expedita?
                </p>
              </div>
            );
          })} */}
          <div className="project">
            <div>
              <h2>Calendar</h2>
            </div>
              

            {/* image gallery */}
            <div className="projectImageGallery">image gallery</div>
            <p className="gray-dark">Technology used: HTML, CSS, Javascript</p>

            <div className="projectActions">
              <button>Live Site</button>
              <a  href="">Source Code</a>
            </div>

            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              nemo aliquid, modi deleniti enim saepe. Nisi blanditiis sequi non
              ipsum debitis maxime omnis eveniet expedita?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
