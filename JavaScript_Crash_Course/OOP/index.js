const circle1 = {
  readius: 1,
  location: {
    x: 1,
    y: 1,
  },

  draw: function () {
    console.log("draw");
  },
};

circle1.draw();

// Factory function
function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1,
    },

    draw: function () {
      console.log("draw");
    },
  };
}

const another = createCircle(1);

// Constructor function
function Circle(radius) {
  //console.log("this", this);
  let color = "red"; // private member
  this.radius = radius;

  let coordinates = function (x, y) {
    return x + y;
  }; // private member

  this.getCoordinates = function () {
    return coordinates;
  };

  this.draw = function () {
    coordinates(3, 5);
    // this.radius
    console.log("draw");
    console.log(coordinates(3, 5));
  };

  // Read only property wit get
  // Write property wit set
  Object.defineProperty(this, "coordinates", {
    get: function () {
      return coordinates;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("invald coordinates");
      }
      coordinates = value;
    },
  });
}

//Circle.call({}, 1);
const circle = new Circle(1);
const circle_1 = new Circle(1);

circle.location = { x: 1 }; // circle['location'] = { x: 1 };

for (let key in circle) {
  console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) {
  console.log("circle has a radius");
}

circle.coordinates(2, 4);
console.log(circle.coordinates(2, 4));

circle.coordinates = 3;
delete circle.location;


