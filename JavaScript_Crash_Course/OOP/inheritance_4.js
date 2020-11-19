/*
039 8- Mixins
*/

// ... is a rest operator which take all arguments and turn thm into an array then spread them at call/use
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swiming");
  },
};

function Person() {}

//const person = Object.assign({}, canEat, canWalk);

// not using mixin function
Object.assign(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {}

// using mixin function
mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);
