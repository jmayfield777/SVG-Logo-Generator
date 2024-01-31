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

// Define function to generate logo.svg
function generateSvg(data) {
  // Define svg elements to be rendered
  return `
  <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  ${data.shape}
  <g>
  <text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.textColor}>${data.text}</text>
  </g>
  </svg>`;
}

// Define function to writeFile
function writeToFile(filename, data) {
  
  fs.writeFile(filename, data, (err) => {
    err ? console.log(err) : console.log("Successfully generated SVG!");
  });

}