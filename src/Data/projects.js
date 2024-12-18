import calendarImg1 from "../Images/CalendarImages/calendar_main2.JPG";
import calendarImg2 from "../Images/CalendarImages/calendar_eventview1.PNG";
import calendarImg3 from "../Images/CalendarImages/calendar_addEvent1.JPG";
import calendarImg4 from "../Images/CalendarImages/calendar_login1.PNG";
import calendarImg5 from "../Images/CalendarImages/calendar_signup1.PNG";
import calendarImg6 from "../Images/CalendarImages/calendar_forgotpassword1.PNG";

import ecommerceImg from "../Images/Ecommerce/landing.png"

import shoppingCartImg1 from "../Images/ShoppingCart/cart_main2.PNG";
import shoppingCartImg2 from "../Images/ShoppingCart/cart_cartModal.PNG";
import shoppingCartImg3 from "../Images/ShoppingCart/cart_2.PNG";
import shoppingCartImg4 from "../Images/ShoppingCart/cart_checkout.PNG";

import tipCalculatorImg1 from "../Images/TipCalculator/calculator_main.PNG";
import tipCalculatorImg2 from "../Images/TipCalculator/calculator_2.PNG";

import pixelEditorImg1 from "../Images/PixelArtEditor/editor_main.PNG";
import pixelEditorImg2 from "../Images/PixelArtEditor/editor2.PNG";
import pixelEditorImg3 from "../Images/PixelArtEditor/editor3.PNG";

import landingPageImg1 from "../Images/LandingPage/landingPageImage1.png"

export const projectsArr = [
  // {
  //   name: "Ecommerce",
  //   id: "ecommerce",
  //   image:
  //     `${ecommerceImg}`,
  //   description:
  //     "A fully responsive ecommerce site that provides a product filter, product screen that allows users to select the product style and a cart and checkout page. All images, and data for this project were provided by GreatFrontend.",
  //   tech: ["NextJS", "TypeScript", "Redux Toolkit"],
  //   site: "https://jhankins-calendar.netlify.app/#/",
  //   code: "https://github.com/jhank12/ecommerce",
  // },
  {
    name: "Calendar",
    id: "calendar",
    image:
      `${calendarImg1}`,
    description:
      "This is a calendar application that allows users to create custom events. All events have CRUD functionality and any changes are updated in real time on a Firestore Database. All accounts are created using Firebase Authentication.",
    tech: ["React", "Redux Toolkit", "Firebase"],
    site: "https://jhankins-calendar.netlify.app/#/",
    code: "https://github.com/jhank12/Calendar",
  },
  {
    name: "Landing Page",
    id: "landingPage",
    image: landingPageImg1,
    description: "Fully responsive landing page. Project provided by Frontend Mentor",
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://jhank12.github.io/landing-page/",
    code: "https://github.com/jhank12/landing-page"
  },
  {
    name: "Shopping Cart",
    id: "shoppingCart",
    image:
      `${shoppingCartImg1}`,
    description:
      "Fake e-commerce site with products that users can choose a quantity of and add to their cart.",
    tech: ["React", "TypeScript", "Redux Toolkit"],

    site: "https://jhank12-shopping-cart.netlify.app/",
    code: "https://github.com/jhank12/Shopping-Cart",
  },
  {
    name: "Tip Calculator",
    id: "calculator",
    image: `${tipCalculatorImg1}`,
    description:
      "Allows users to input bill amount, number of people and tip percentage to divide the bill evenly.",

    tech: ["HTML", "CSS", "JavaScript"],

    site: "https://jhank12.github.io/Tip-Calculator/",
    code: "https://github.com/jhank12/Tip-Calculator",
  },

  {
    name: "Pixel Art Editor",
    id: "pixelArt",
    image: `${pixelEditorImg1}`,
    description:
      " Simple pixel art editor that allows users to select a grid size and draw pixel art. The selected grid size is calculated with JavaScript and displayed using the HTML Canvas element",

    tech: ["HTML", "CSS", "JavaScript"],

    site: "https://jhank12.github.io/Pixel-Art-Editor/",
    code: "https://github.com/jhank12/Pixel-Art-Editor",
  },
];
