import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import pdf from "../../Resume/Joshua Hankins Resume.pdf";

import "./navbar.css";

const Navbar = ({ scrollToElement }) => {
  const [inProp, setInProp] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const nodeRef = useRef(null);

  function checkSize() {
    if (window.innerWidth <= 850) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setInProp(false);
    }
  }

  useEffect(() => {
    checkSize();

    window.addEventListener("resize", checkSize);
  }, []);

  function linkClick(id) {
    setInProp(false);

    if (id) scrollToElement(id);
  }

  return (
    <header className="navbar">
      <div className="navIcon">
        <h1>J</h1>
        <h1 className="logoSecondLetter">J</h1>
      </div>

      {!isMobile ? (
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
      ) : (
        <div className="mobileNav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
            onClick={() => setInProp(!inProp)}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>

          <div className="navContainer">
            <CSSTransition
              nodeRef={nodeRef}
              in={inProp}
              timeout={200}
              classNames="testClass my-node"
            >
              <nav ref={nodeRef} className="testNav">
                <ul>
                  <li onClick={() => linkClick("skills")}>Skills</li>
                  <li onClick={() => linkClick("projects")}>Projects</li>
                  <li onClick={() => linkClick()}>
                    <a href={pdf} rel="noreferrer" target="_blank">
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
            </CSSTransition>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
