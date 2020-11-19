import { compose, pipe } from 'lodash/fp';

console.log("Hello World!");


//// Composing and Piping and Currying
console.log("   ----Composing and Piping and Currying----  ");

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrap = (type, str) => `<${type}>${str}</${type}>`;
const wrap_curry = type => str=> `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const result = wrap("span", toLowerCase(trim(input)))

// Using loadash evade using multiple parenthesis
const transform0 = compose(wrap, toLowerCase, trim); //from Right to Left
const transform = pipe(trim, toLowerCase, wrap_curry("img")); // from Left to Right

const result2 = transform(input)

console.log(result, result2);




//// Updating Objects
console.log("   ----Updating Objects----  ");

const person = {
 name: "Jhon",
 address: {
  country: "USA",
  city: "San Francisco"
} };
const updated_0 = Object.assign({}, person, { name: "Bob", age: 30 });
const updated = {...person, address:{...person.address, city:"New York"}, name: "Bob", age: 30 }
console.log(updated) 




 ////Updating Arrays
 console.log("   ----Updating Arrays----  ");

const numbers = [1, 2, 3];

//Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added);

//Removing
const removed = numbers.filter(n => n !== 2);
console.log(removed);

//Updating
const Updated = numbers.map(n => (n === 2 ? 20 : n));
console.log(Updated);


////Immutable.js
console.log("   ----immutable----  ");
import { Map } from 'immutable';

let book = Map({ title: "Harry Poter" });

function publish(book) {
  return book.set("isPublished", true)
}

book = publish(book);

console.log(book, book.get("title"));
console.log(book.toJS());


////Immer.js
console.log("   ----immer----  ");
import { produce } from 'immer';

let book_immer = { title: "Harry Poter" };

function publish_immer(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
 })
}

let updated_immer = publish_immer(book_immer);

console.log(book_immer, updated_immer);