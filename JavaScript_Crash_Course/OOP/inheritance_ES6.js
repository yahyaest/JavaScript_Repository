//****** 1-Classes + 3-Static Method + 5&6-Private Member with Symbol and WeakMap + 7-Setters & Getters  ******//

// Before ES6

// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log("draw");
//   };
// }

//After ES6

// Symbol Method
const _color = Symbol();
const _erase = Symbol();

// WeakMap Method
const _center = new WeakMap();
const _modify = new WeakMap();

class Circle {
  constructor(radius, color, center) {
    this.radius = radius;

    // Private Member Using Symbol
    this[_color] = color;

    // Private Member Using WeakMap
    _center.set(this, center);

    this.move = function () {}; /// Not Inside the Prototype

    // Private Method Using WeakMap

    // _modify.set(this, function () {
    //  console.log("modify", this);   // this here doesn't refere to circle object

    _modify.set(this, () => {
      console.log("modify", this);
    }); //this here refere to circle object
  }

  //Instance Method
  draw() {
    console.log("draw");
    console.log(_center.get(this)); // Return value of Private Member center
    _modify.get(this)(); // Return value of Private Methode modify
  } /// Inside the Prototype

  // Getter
  get center() {
    return _center.get(this);
  }

  // Setter
  set center(value) {
    _center.set(this, value);
  }

  //Static Method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }

  // Private Method Using Symbol
  [_erase]() {}
}

const c = new Circle(5, "red", [0, 0]);
const circle = Circle.parse('{"radius": 7}'); // Using Static Method : Utility Function ---> Very Useful !!!

//****** 2-Hoisting ******//

sayHello(); // Won't Generate Error
//sayGoodbye(); // Generate Error

// Function Declaration
function sayHello() {}

//Function Expression
const sayGoodbye = function () {};

//const sh = new Shape(); // Generate Error
//const sq = new Square(); // Generate Error

// Class Declaration
class Shape {}

//Class Expression
const Square = class {};

//****** 8-Implement Inheritance + 9-Method Overriding  ******//

class Shape1 {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
}

class Circle1 extends Shape1 {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  //Method Overriding
  move() {
    super.move(); // Access Parent Method

    console.log("move circle");
  }

  draw() {
    console.log("draw");
  }
}

const c1 = new Circle1("red", 7);
