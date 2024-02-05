export const projectsArr = [
  {
    name: "Calendar",
    id: "calendar",
    images: [
      "../../Images/CalendarImages/calendar_main2.JPG",
      "../../Images/CalendarImages/calendar_eventview1.PNG",
      "../../Images/CalendarImages/calendar_addEvent1.JPG",
      "../../Images/CalendarImages/calendar_login1.PNG",
      "../../Images/CalendarImages/calendar_signup1.PNG",
      "../../Images/CalendarImages/calendar_forgotpassword1.PNG",
    ],
    description:
      "This is a calendar application that allows users to create custom events. All events have CRUD functionality and any changes are updated in real time on a Firestore Database. All accounts are created using Firebase Authentication.",
    tech: ["React", "Redux Toolkit", "Firebase"],
    site: "https://calendar-jhank12.netlify.app/#/",
    code: "https://github.com/jhank12/Calendar",
  },
  {
    name: "Shopping Cart",
    id: "shoppingCart",
    images: [
      "../../Images/ShoppingCart/cart_main2.PNG",
      "../../Images/ShoppingCart/cart_cartModal.PNG",
      "../../Images/ShoppingCart/cart_2.PNG",
      "../../Images/ShoppingCart/cart_checkout.PNG",
    ],
    description:
      "Fake e-commerce site with products that users can choose a quantity of and add to their cart.",
    tech: ["React", "TypeScript", "Redux Toolkit"],

    site: "https://jhank12-shopping-cart.netlify.app/",
    code: "https://github.com/jhank12/Shopping-Cart",
  },
  {
    name: "Tip Calculator",
    id: "calculator",
    images: [
      "../../Images/TipCalculator/calculator_main.PNG",
      "../../Images/TipCalculator/calculator_2.PNG",
    ],
    description:
      "Allows users to input bill amount, number of people and tip percentage to divide the bill evenly.",

    tech: ["HTML", "CSS", "JavaScript"],

    site: "https://jhank12.github.io/Tip-Calculator/",
    code: "https://github.com/jhank12/Tip-Calculator",
  },

  {
    name: "Pixel Art Editor",
    id: "pixelArt",
    images: [
      "../../Images/PixelArtEditor/editor_main.PNG",
      "../../Images/PixelArtEditor/editor2.PNG",
      "../../Images/PixelArtEditor/editor3.PNG",
    ],
    description:
      " Simple pixel art editor that allows users to select a grid size and draw pixel art. The selected grid size is calculated with JavaScript and displayed using the HTML Canvas element",

    tech: ["HTML", "CSS", "JavaScript"],

    site: "https://jhank12.github.io/Pixel-Art-Editor/",
    code: "https://github.com/jhank12/Pixel-Art-Editor",
  },
];
