import flashcardsLandingImg from "../Images/Flashcards/flashcardsLandingImg.png";

import calendarImg1 from "../Images/CalendarImages/calendar_main2.JPG";

import shoppingCartImg1 from "../Images/ShoppingCart/cart_main2.PNG";

import landingPageImg1 from "../Images/LandingPage/landingPageImage1.png";

export const projectsArr = [
  {
    name: "Flashcards Application",
    id: "flashcard",
    image: `${flashcardsLandingImg}`,
    description:
      "This is a fullstack application that allows users to create custom flashcard sets to assist in studying. Users can add, edit and delete their flashcard set if a change needs to be made. All user data is saved and persisted using local storage.",
    tech: ["NextJS", "TypeScript"],
    site: "https://jhank-flashcards.netlify.app/",
    code: "https://github.com/jhank12/Flashcards",
  },

  {
    name: "Calendar",
    id: "calendar",
    image: `${calendarImg1}`,
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
    description:
      "Fully responsive landing page. Project provided by Frontend Mentor",
    tech: ["HTML", "CSS", "JavaScript"],
    site: "https://jhank12.github.io/landing-page/",
    code: "https://github.com/jhank12/landing-page",
  },
  {
    name: "Shopping Cart",
    id: "shoppingCart",
    image: `${shoppingCartImg1}`,
    description:
      "Fake e-commerce site with products that users can choose a quantity of and add to their cart.",
    tech: ["React", "TypeScript", "Redux Toolkit"],

    site: "https://jhank12-shopping-cart.netlify.app/",
    code: "https://github.com/jhank12/Shopping-Cart",
  },
];
