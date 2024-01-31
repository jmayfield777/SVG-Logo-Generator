// Parent class called Shapes
class Shapes {
  // constructor that takes color as an argument
  constructor(color) {
    this.color = color;
  }

  // set color method to change the color
  setColor(color) {
    this.color = color;
  }
}

// Triangle class extending from Shapes
class Triangle extends Shapes {

  // set render method to create triangle
  render() {
    return `<polygon points='150, 18 244, 182 56, 182' fill='${this.color}'/>`
  }
}

// Square class extending from Shapes
class Square extends Shapes {

  // set render method to create square
  render() {
    return `<polygon points='100,100 200,100 200,200 100,200' fill='${this.color}'/>`
  }
}

// Circle class extending from Shapes
class Circle extends Shapes {

  // set render method to create circle
  render() {
    return `<circle cx='200' cy='100' r='100' fill='${this.color}'/>`
  }
}

module.exports = {Triangle, Square, Circle};