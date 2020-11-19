// console.log("Just fuck off already !!!");

// let name = "Yeah!";
// console.log(name);
// console.log(typeof name);

// const interestRate = 0.6;
// console.log(interestRate);
// console.log(typeof interestRate);


// Create an object type : simlar to struct in C
let person = {
  name: "Yahya",
  age: 30,
};
console.log(person);
//Dot Notation
person.age = 26;
console.log(person);
console.log(person.name);
//Bracket Notation
person['age'] = '27';
console.log(person.age);
//Array (object)
let favoriteColers = ['red', 'blue'];
console.log(favoriteColers);
favoriteColers[2] = 7;
console.log(favoriteColers[1]);
console.log(typeof favoriteColers);
console.log('lenght is ', favoriteColers.length);

//function
function cercleSurface(rayon){
const Pi = 3.14;
//let rayon = 5;
let surface = 2 * Pi * rayon;
//return surface;
console.log('surface is', surface);
}

cercleSurface(10);
cercleSurface(15);