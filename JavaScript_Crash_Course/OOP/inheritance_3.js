/*
036 5- Method Overriding
037 6- Polymorphism
*/

// Intermediate Function Inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle() {}

extend(Circle, Shape);

// After extand()
Circle.prototype.duplicate = function () {
  // Calling Parent Method
  Shape.prototype.duplicate.call(this);

  console.log("duplicate circle");
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

//const shape = new Shape();
//const circle = new Circle();
//const square = new Square();

const shapes = [new Circle(), new Square()];

for (let shape of shapes) shape.duplicate();
