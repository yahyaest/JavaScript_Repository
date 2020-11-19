/*
1- Creating Your Own Prototypical Inheritance
2- Resetting the Constructor
3- Calling the Super Constructor
4- Intermediate Function Inheritance
*/

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

//Circle.prototype = Object.create(Object.prototype) //objectBase : default prototype

// Intermediate Function Inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child; // Reset Constructor : Important
}

function Circle(radius, color) {
  // Calling super/parent Constructor
  Shape.call(this, color);
  // Instance members
  this.radius = radius;
}

extend(Circle, Shape);

// Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

const shape = new Shape();
// new Circle.prototype.constructor(1) => new Circle(1)
const circle = new Circle(1, "blue");
const square = new Square(10);

console.log(circle.draw(), circle.duplicate());
