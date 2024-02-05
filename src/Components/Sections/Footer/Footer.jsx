import React from "react";

// import pdf from "../dist/assets/Joshua Hankins Resume-X9GOmyty.pdf";

import pdf from "../../../Resume/Joshua Hankins Resume.pdf";



import './footer.css'

const Footer = ({ scrollToElement }) => {
  return (
    <footer>
      <div className="footerContent">
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
  );
};

export default Footer;
