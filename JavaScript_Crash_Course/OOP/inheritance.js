/*
2- Prototypes and Prototypical Inheritance
4- Property Descriptors
6- Prototype vs. Instance Members
7- Iterating Instance and Prototype Members
*/

function Circle(radius) {
  // Instance members
  this.radius = radius;

  // this.draw = function () {
  //   console.log("draw");
  // };

  this.move = function () {
    this.draw(); //or
    console.log("move");
  };
}

// Prototype members
Circle.prototype.draw = function () {
  //this.move();   //or
  console.log("draw");
};

Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

console.log(Circle.prototype);

const circle = new Circle(10);

// Return instance members
console.log(Object.keys(circle));
console.log(circle.hasOwnProperty("move"));
console.log(circle.hasOwnProperty("draw"));
// Return all members (instance/own + prototype)
for (let key in circle) console.log(key);

/////// Prototype description
console.log("*****Prototype description*****");
let person = { name: "yahya" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

person.name = "azerty";
console.log(person);
console.log(person.name);
console.log(Object.keys(person));
delete person.name;
console.log(person);
