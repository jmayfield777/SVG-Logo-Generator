// import fs
const fs = require("fs");
// import inquirer
const inquirer = require("inquirer");
// import triangle, square, and circle classes
const {Triangle, Square, Circle} = require("./lib/shapes.js");
// variable to hold shape question choices
const shapeChoices = [
  "Triangle",
  "Square",
  "Circle",
];

// inquirer questions for users
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter the text (up to 3 characters) you would like the logo to display: ",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color: ",
    },
    {
      type: "input",
      name: "color",
      message: "Enter what color you would like the logo to be (color keyword or hexadecimal): ",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like the logo to be?",
      choices: shapeChoices,
    },
]);