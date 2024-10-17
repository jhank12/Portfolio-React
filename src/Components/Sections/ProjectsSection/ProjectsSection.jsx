import React, { useRef, useState } from "react";

import "./projectsSection.css";
import ImageGallery from "../../ImageGallery/ImageGallery";
import ContentSection from "../../Reusable/ContentSection";

import { projectsArr } from "../../../Data/projects";

const ProjectsSection = () => {

  return (
    <ContentSection id={"projects"}>
      <h2>Projects</h2>

      <div className="projectsContainer">
        <div className="projectsList">
          {projectsArr.map((project) => {
            const {
              name,
              id,
              image,
              description,
              tech: techArr,
              site,
              code,
              ref,
            } = project;

            return (
              <div key={id} className="project" id={id} ref={ref}>
                <ImageGallery name={name} image={image} />
                {/* <img src={image} alt="" /> */}
                <div className="projectDescription">
                  <h3>{name}</h3>

                  <p className="font-secondary">{description}</p>
                  <div className="technology_actionsContainer">
                    <p className="gray-dark">
                      Technology used:{" "}
                      {techArr.map((tech) => {
                        if (techArr.indexOf(tech) !== techArr.length - 1) {
                          return <strong key={tech}> {tech}, </strong>;
                        } else {
                          return <strong key={tech}> {tech} </strong>;
                        }
                      })}
                    </p>

                    <div className="projectActions">
                      <a
                        className="linkBtn"
                        href={site}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Live Site
                      </a>
                      <a href={code} rel="noreferrer" target="_blank">
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ContentSection>
  );
};

export default ProjectsSection;
