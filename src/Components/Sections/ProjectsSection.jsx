import React, { useState } from "react";

import "/src/projectsSection.css";
import ImageGallery from "../ImageGallery/ImageGallery";

const ProjectsSection = () => {
  const testArr = [
    {
      name: "Calendar",
      id: "calendar",
      images: [
        "../src/Images/CalendarImages/calendar_main2.JPG",
        "../src/Images/CalendarImages/calendar_eventview1.PNG",
        "../src/Images/CalendarImages/calendar_addEvent1.JPG",
        "../src/Images/CalendarImages/calendar_login1.PNG",
        "../src/Images/CalendarImages/calendar_signup1.PNG",
        "../src/Images/CalendarImages/calendar_forgotpassword1.PNG",
      ],
      site: 'https://calendar-jhank12.netlify.app/#/',
      code: 'https://github.com/jhank12/Calendar'
    },
    {
      name: "Shopping Cart",
      id: "shoppingCart",
      images: [
        "../src/Images/ShoppingCart/cart_main2.PNG",
        "../src/Images/ShoppingCart/cart_cartModal.PNG",
        "../src/Images/ShoppingCart/cart_2.PNG",
        "../src/Images/ShoppingCart/cart_checkout.PNG",
      ],
      site: 'https://jhank12-shopping-cart.netlify.app/',
      code: 'https://github.com/jhank12/Shopping-Cart'
    },
    {
      name: "Tip Calculator",
      id: "calculator",
      images: [
        "../src/Images/TipCalculator/calculator_main.PNG",
        "../src/Images/TipCalculator/calculator_2.PNG",
      ],
      site: 'https://jhank12.github.io/Tip-Calculator/',
      code: 'https://github.com/jhank12/Tip-Calculator'
    },
    {
      name: "Pixel Art Editor",
      id: "pixelArt",
      images: [
        "../src/Images/PixelArtEditor/editor_main.PNG",
        "../src/Images/PixelArtEditor/editor2.PNG",
        "../src/Images/PixelArtEditor/editor3.PNG",
      ],
      site: 'https://jhank12.github.io/Pixel-Art-Editor/',
      code: 'https://github.com/jhank12/Pixel-Art-Editor'
    },
  ];

  const [link, setLink] = useState();

  return (
    <section className="contentSection">
      <h2>Projects</h2>

      <div className="projectsContainer">
        {/* left side navigation */}
        <nav className="projectsNav">
          <ul>
            <li onClick={() => setLink("calendar")}>Calendar</li>
            <li onClick={() => setLink("shoppingCart")}>E-Commerce</li>
            <li onClick={() => setLink("calculator")}>Tip Calculator</li>
            <li onClick={() => setLink("pixelArt")}>Pixel Art Editor</li>
          </ul>
        </nav>

        <div className="projectsList">
          {testArr.map((project) => {
            const { name, id, images, site, code } = project;

            return (
              <div key={id} className="project" id={id}>
                <div>
                  <h2>{name}</h2>
                </div>

                <ImageGallery images={images} />

                <div className="projectDescription">
                  <h4>Description</h4>
                  <br />
                  <p className="font-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Culpa nemo aliquid, modi deleniti enim saepe. Nisi
                    blanditiis sequi non ipsum debitis maxime omnis eveniet
                    expedita?
                  </p>
                </div>

                <p className="gray-dark">
                  Technology used: HTML, CSS, Javascript
                </p>

                <div className="projectActions">
                  <button>Live Site</button>
                  <a href={site} rel="noreferrer" target="_blank">Live Site</a>
                  <a href={code} rel="noreferrer" target="_blank">Source Code</a>
                </div>
              </div>
            );
          })}
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
          {/* <div className="project">
            <div>
              <h2>Calendar</h2>
            </div>

            <div className="projectImageGallery">image gallery</div>
            <p className="gray-dark">Technology used: HTML, CSS, Javascript</p>

            <div className="projectActions">
              <button>Live Site</button>
              <a href="">Source Code</a>
            </div>

            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              nemo aliquid, modi deleniti enim saepe. Nisi blanditiis sequi non
              ipsum debitis maxime omnis eveniet expedita?
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;