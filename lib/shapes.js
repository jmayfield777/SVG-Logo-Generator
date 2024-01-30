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
  // import color contructor from Shapes
  constructor() {
    super(color);
  }

  // set render method to create triangle
  render() {
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}/>
    </svg>
    `
  }
}

// Square class extending from Shapes
class Square extends Shapes {
  constructor() {
    super(color);
  }

  // set render method to create square
  render() {
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,100 200,100 200,200 100,200" fill="${this.color}"/>
    </svg>
    `
  }
}

// Circle class extending from Shapes
class Circle extends Shapes {
  constructor() {
    super(color);
  }

  // set render method to create circle
  render() {
    return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="100" r="100" fill="${this.color}/>
    </svg>
    `
  }
}