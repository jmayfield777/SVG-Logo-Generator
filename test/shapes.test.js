// Import shapes.js
const {Triangle, Square, Circle} = require('../lib/shapes.js');

// Define triangle test function 
describe("Triangle", () => {
  it("should render a triangle", () => {
    const shape = new Triangle();
    shape.setColor();
    expect(shape.render()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill='${this.color}'/>`);
  })
});

// Define square test function
describe("Square", () => {
  it("should render a square", () => {
    const shape = new Square();
    shape.setColor();
    expect(shape.render()).toEqual(`<polygon points='100,100 200,100 200,200 100,200' fill='${this.color}'/>`);
  })
});

// Define circle test function
describe("Circle", () => {
  it("should render a circle", () => {
    const shape = new Circle();
    shape.setColor();
    expect(shape.render()).toEqual(`<circle cx='200' cy='100' r='100' fill='${this.color}'/>`);
  })
});