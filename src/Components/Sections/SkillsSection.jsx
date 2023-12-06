import React from "react";

const SkillsSection = () => {
  const skills = {
    proficient: [
      { icon: <i className="devicon-html5-plain colored"></i>, skill: "HTML" },

      { icon: <i className="devicon-css3-plain colored"></i>, skill: "CSS" },
      {
        icon: <i className="devicon-javascript-plain colored"></i>,
        skill: "Javascript",
      },
      {
        icon: <i className="devicon-react-original colored"></i>,
        skill: "React",
      },

      {
        icon: <i className="devicon-redux-original colored"></i>,
        skill: "Redux Toolkit",
      },

      {
        icon: <i className="devicon-sass-original colored"></i>,
        skill: "SASS",
      },

      { icon: <i className="devicon-figma-plain colored"></i>, skill: "Figma" },
    ],
    experience: [
      {
        icon: <i className="devicon-typescript-plain colored"></i>,
        skill: "Typescript",
      },
      { icon: <i className="devicon-swift-plain colored"></i>, skill: "Swift" },
      {
        icon: <i className="devicon-firebase-plain colored"></i>,
        skill: "Firebase",
      },
      { icon: <i className="devicon-git-plain colored"></i>, skill: "Git" },
    ],
  };

  return (
    <section className="contentSection">
      <h2>Skills</h2>


      {Object.keys(skills).map((key) => {
        return (
          <div key={key} className="skillsContainer">
            <h3>{key[0].toUpperCase() + key.slice(1)} with:</h3>

            {/* render list here */}
            <div className="skillsList">
              {skills[key].map((skillObj) => {
                const { icon, skill } = skillObj;

                return (
                  <div key={skill} className="skillIconContainer">
                    {icon}
                    <p>{skill}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* <div className="skillsContainer">
        <h3>Proficient with:</h3>

        <div className="skillsList">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Redux Toolkit</p>
          <p>SASS</p>
          <p>Figma</p>
        </div>
      </div>

      <div className="skillsContainer">
        <h3>Experience with:</h3>

        <div className="skillsList">
          <p>Typescript</p>
          <p>Swift</p>
          <p>Firebase</p>
          <p>Git</p>
        </div>
      </div> */}
    </section>
  );
};

export default SkillsSection;
