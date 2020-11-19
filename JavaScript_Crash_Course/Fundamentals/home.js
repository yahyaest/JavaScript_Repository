console.log("hello");

// Pop Up Message
//alert("fuck off !");

////Variables
console.log("**Variables**");
var a = "azerty";
var x = 42;

console.log(a, "=>", x);

// Manipulate DOM with Javascript
/* ... It's a way to change HTML with Javascript*/

// Data input using prompt
//let name = prompt("What is your name ?");
//let age = prompt("What is your age ?");

//document.getElementById("Text").innerHTML = name + " age is " + age;

//// Numbers in JavaScript
console.log("**Numbers**");
var num1 = 5.7;
num1++; //Increment by 1
num1 += 6; //Increment by any number
num1--; //Decrement by 1
num1 -= 3; //Decrement by any number

console.log(num1 * 10);
console.log((num1 * 10) % 7); //Remainder

//// Functions
console.log("**Functions**");
// I
function fun(name) {
  console.log("fuck off", name, "!");
}
fun(a);
fun("bitch");

// II
function Info() {
  let name = prompt("What is your name ?");
  let age = prompt("What is your age ?");
  document.getElementById("Text").innerHTML = name + " age is " + age;
}
//Info();

//// While loop
console.log("**While loopp**");
var number = 0;
while (number < 5) {
  number += 1;
  console.log(number);
}

//// For loop
console.log("**For loop**");
for (let number1 = 10; number1 <= 25; number1 += 5) {
  console.log(number1);
}

//// Data types
console.log("**Data types**");
let Age = 25; // Number
console.log(Age, typeof Age, Age.length);

let Name = "bob"; // String
console.log(Name, typeof Name, Name.length);

let truth = false; // Boolean
console.log(truth, typeof truth, truth.length);

let FullName = { first: "Jane", last: "Lee" }; // Object(Dictionnary)
console.log(FullName, typeof FullName, FullName.length);

let Data = [10, "Never", FullName]; // Array(List)
console.log(Data, typeof Data, Data.length);

let random;
console.log(random, typeof random); // Undefined

let nothing = null;
console.log(nothing, typeof nothing); // Null Object

//console.log(Age, Name, truth, FullName, Data , random, nothing);

//// Strings in Javascript
console.log("**Strings in Javascript**");
let fruit = "Banana";
let fruits = "banana,orange,apple";
let moreFruits = "orange\napple"; // New line
console.log(moreFruits, "\n", fruit.length);
console.log(fruit.indexOf("nan"), fruit.indexOf("xx"));
console.log(fruit.charAt(3));
console.log(fruit[0]);
console.log(fruit.slice(2, 5));
console.log(fruit.replace("ban", "1x"));
console.log(fruit.slice(2, 5));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.split("")); // Split by charcters
console.log(fruits.split(",")); // Split by comas

//// Array in Javascript
console.log("**Array in Javascript**");
let Fruits = ["banana", "orange", "apple"]; // Declaration 1
let Fruits1 = new Array("banana", "orange", "apple"); //Declaration 2

//alert(Fruits[2]);
console.log(Fruits[2]); //Access Value
Fruits[0] = "pear"; // Change Value
console.log(Fruits);

for (let index = 0; index < Fruits.length; index++) {
  console.log(Fruits[index]);
}

//Array Common Methods
console.log("to string:", Fruits.toString());
console.log(Fruits.join("*"));
console.log("Before pop", Fruits);
console.log("pop", Fruits.pop()); //Remove last item
console.log("After pop", Fruits);
console.log(Fruits.push("starwberries"), Fruits); // Appnd item
console.log(Fruits[3]);
Fruits[Fruits.length] = "lastFruit"; // Same as push
console.log(Fruits);
Fruits.shift(); // Remove first element
console.log(Fruits);
Fruits.unshift("kiwi"); // Add first element
console.log(Fruits);

let Vgetables = ["tomato", "potato", "boroccoli"];
let allGroceries = Fruits.concat(Vgetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse()); // Reverse element
console.log("sorted:", allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 122, 2];
console.log(
  someNumbers.sort(function (a, b) {
    return a - b;
  })
); // Ascending sort
console.log(
  someNumbers.sort(function (a, b) {
    return b - a;
  })
); // Descending sort

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);

//// Objects in Javascript
//dictionnaries in python
console.log("**Objects in Javascript**");

let student = {
  name: "ali",
  score: 16,
  age: 25,
  studentInfo: function () {
    return this.name + "\n" + this.score + "\n" + this.age;
  },
};
console.log(student.name);
console.log(student.score);
student.name = "milan"; // Change value
console.log(student.name);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

//// Conditionals : if else
console.log("**Conditionals : if else**");
//let age = prompt("What is your age ?");
let age = 24;
if (age >= 18 && age <= 35) {
  status = "target demo";
  console.log(status);
} else {
  status = "not my audience";
  console.log(status);
}

//Switch Statements
switch (0) {
  case 0:
    text = "sunday weekend";
    break;
  case 5:
    text = "friday weekend";
  break;
  case 6:
    text = "saturday weekend";
  break;
  default:
    text = "weekday";
}

console.log(text);
