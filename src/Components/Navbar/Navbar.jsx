import React, {useState} from "react";

import pdf from "E:/Web Development/React Projects/Portfolio-React/src/Resume/Joshua Hankins Resume.pdf";

import './navbar.css'

const Navbar = ({ scrollToElement }) => {

  const [ linksOpen, setLinksOpen ] = useState(false);

  return (
    <header className="navbar">
      <h3>Title</h3>

      <nav>
        <ul>
          <li onClick={() => scrollToElement("skills")}>Skills</li>
          <li onClick={() => scrollToElement("projects")}>Projects</li>
          <li>
            <a href={pdf} rel="noreferrer" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="mobileNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"

          onClick={() => setLinksOpen(!linksOpen)}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>

        {linksOpen && (
          <nav>
            <ul>
              <li onClick={() => scrollToElement("skills")}>Skills</li>
              <li onClick={() => scrollToElement("projects")}>Projects</li>
              <li>
                <a href={pdf} rel="noreferrer" target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
// mobile nav
