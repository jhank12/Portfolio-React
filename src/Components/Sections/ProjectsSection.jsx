import React, { useRef, useState } from "react";

import "/src/projectsSection.css";
import ImageGallery from "../ImageGallery/ImageGallery";

const ProjectsSection = () => {
  const calendarRef = useRef(null);
  const cartRef = useRef(null);
  const calculatorRef = useRef(null);
  const pixelArtRef = useRef(null);

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
      description:
        "Users can create an account and add custom events to the calendar. Any changes to the calendar are saved and updated in realtime with the Firestore database.",
      tech: ["React", "Redux Toolkit", "Firebase"],
      site: "https://calendar-jhank12.netlify.app/#/",
      code: "https://github.com/jhank12/Calendar",
      ref: calendarRef,
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
      description:
        "Fake e-commerce site with products that users can choose a quantity of and add to their cart.",
      tech: ["React", "TypeScript", "Redux Toolkit"],

      site: "https://jhank12-shopping-cart.netlify.app/",
      code: "https://github.com/jhank12/Shopping-Cart",
      ref: cartRef,
    },
    {
      name: "Tip Calculator",
      id: "calculator",
      images: [
        "../src/Images/TipCalculator/calculator_main.PNG",
        "../src/Images/TipCalculator/calculator_2.PNG",
      ],
      description:
        "Allows users to input bill amount, number of people and tip percentage to divide the bill evenly.",

      tech: ["HTML", "CSS", "JavaScript"],

      site: "https://jhank12.github.io/Tip-Calculator/",
      code: "https://github.com/jhank12/Tip-Calculator",
      ref: calculatorRef,
    },
    {
      name: "Pixel Art Editor",
      id: "pixelArt",
      images: [
        "../src/Images/PixelArtEditor/editor_main.PNG",
        "../src/Images/PixelArtEditor/editor2.PNG",
        "../src/Images/PixelArtEditor/editor3.PNG",
      ],
      description:
        "Fake e-commerce site with products that users can choose a quantity of and add to their cart.",

      tech: ["HTML", "CSS", "JavaScript"],

      site: "https://jhank12.github.io/Pixel-Art-Editor/",
      code: "https://github.com/jhank12/Pixel-Art-Editor",
      ref: pixelArtRef,
    },
  ];

  const [link, setLink] = useState();

  let ref = useRef(null);

  function handleScroll(id) {
    console.log(id);
    switch (id) {
      case "calendar":
        ref = calendarRef;
        break;
      case "shoppingCart":
        ref = cartRef;
        break;

      case "calculator":
        ref = calculatorRef;
        break;
      case "pixelArt":
        ref = pixelArtRef;
        break;
    }

    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="contentSection">
      <h2>Projects</h2>

      <div className="projectsContainer">
        {/* left side navigation */}
        <nav className="projectsNav">
          {/* render dynamically from arr using id */}
          <ul>
            {testArr.map((item) => {
              const { name, id } = item;

              return (
                <li key={id}>
                  <a onClick={() => handleScroll(id)}>{name}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="projectsList">
          {testArr.map((project) => {
            const {
              name,
              id,
              images,
              description,
              tech: techArr,
              site,
              code,
              ref,
            } = project;

            return (
              <div key={id} className="project" id={id} ref={ref}>
                <div>
                  <h2>{name}</h2>
                </div>

                <ImageGallery images={images} />

                <div className="projectDescription">
                  {/* <h4>Description</h4> */}
                  {/* <br /> */}
                  <p className="font-secondary">{description}</p>
                </div>

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
