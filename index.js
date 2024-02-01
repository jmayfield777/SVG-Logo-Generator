// import fs
const fs = require("fs");
// import inquirer
const inquirer = require("inquirer");
// import triangle, square, and circle classes
const {Triangle, Square, Circle} = require("./lib/shapes.js");
// variable to hold shape question choices
const shapeOptions = [
  "Triangle",
  "Square",
  "Circle",
];

// Define function to generate logo.svg
function writeToFile(filename, answers) {
  
  // Define svg elements to be rendered
  let svgEl = "";
  let shapeChoice = "";

  // Conditional to check which shape is chosen
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgEl = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${answers.color}"/>
    <g>
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
    </g>
    </svg>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgEl = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points='100,100 200,100 200,200 100,200' fill='${answers.color}'/>
    <g>
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
    </g>
    </svg>`;
  } else if (answers.shape === "Circle") {
    shapeChoice = new Circle();
    svgEl = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx='200' cy='100' r='100' fill='${answers.color}'/>
    <g>
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
    </g>
    </svg>`;
  }

  fs.writeFile(filename, svgEl, (err) => {
    err ? console.log(err) : console.log("Successfully generated SVG!");
  });

}


// inquirer questions for users
function questionPrompt() {

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
        choices: shapeOptions,
      },
    ])
    .then((answers) => {

      if (answers.text.length > 3) {
        console.log("Please enter 3 characters or less.");
        return questionPrompt();
      } else {
        // call writeToFile()
        writeToFile("./examples/logo.svg", answers);
      }
    });

}

// initialize app
questionPrompt();