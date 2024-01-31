// Import shapes.js
const {Triangle, Square, Circle} = require('../lib/shapes.js');

// Define triangle test function 
describe("Triangle", () => {
  it("should render a triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render().toEqual("<polygon points='150, 18 244, 182 56, 182' fill='blue'/>"));
  })
});

// Define square test function
describe("Square", () => {
  it("should render a square", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render().toEqual("<polygon points='100,100 200,100 200,200 100,200' fill='green'/>"));
  })
});