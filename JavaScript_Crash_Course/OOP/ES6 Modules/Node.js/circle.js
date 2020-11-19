/*
Commun JS Module
*/

// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

// module.exports.Circle = Circle;   // Use in case of multiple Objects
module.exports = Circle;
