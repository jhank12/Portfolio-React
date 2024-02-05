import React from "react";

import { skills } from "../../../Data/skills";

import "./skillsSection.css";

import ContentSection from "../../Reusable/ContentSection";

const SkillsSection = ({ id }) => {
  return (
    <ContentSection id={"skills"}>
      <h2>Skills</h2>

      {Object.keys(skills).map((key) => {
        return (
          <div key={key} className="skillsContainer">
            <h3>{key[0].toUpperCase() + key.slice(1)} with:</h3>

            <div className="skillsList">
              {skills[key].map((skillObj) => {
                const { icon, skill } = skillObj;

                return (
                  <div key={skill} className="skillIconContainer">
                    <i className={icon} />
                    <p>{skill}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </ContentSection>
  );
};

export default SkillsSection;
