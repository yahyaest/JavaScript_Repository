// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

Object.assign(HtmlElement.prototype, focus);

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function () {
    return `
    <select>${this.items
      .map(
        (item) => `
    <option>${item}</option>`
      )
      .join("")}
   </select> `;
  };
}

function HtmlImgElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}"></img>`;
  };
}

// extend(HtmlSelectElement, HtmlElement);

// HtmlSelectElement.prototype.click = function () {
//   console.log("clicked");
// };
e = new HtmlElement();
console.log(e.click(), e.focus());

HtmlSelectElement.prototype = new HtmlElement(); // replace the commented area
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constructor = HtmlImgElement;

//Printing

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImgElement("http://"),
];

for (let element of elements) console.log(element.render());
