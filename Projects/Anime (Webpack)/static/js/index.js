import "../scss/main.scss";
import "../scss/index.scss";
import "../scss/anime_data.scss";

import { handleData } from "./anime_data";

// let fs = require('fs');
// let data = fs.readFileSync("words.json");
// let words = JSON.parse(data);
// console.log(words);

let nav = document.querySelector("header");
nav.classList.remove("on-scroll-down");
nav.classList.remove("on-scroll-up");
const navLinks = document.querySelector(".nav-links");
const navDivs = document.querySelectorAll(".nav-links div");
console.log(nav);

$(window).scroll(function () {
  var scroll_top = $(this).scrollTop();
  if (scroll_top > 10) {
    nav.classList.add("on-scroll-down");
    nav.classList.remove("on-scroll-up");

    navLinks.classList.add("on-scroll-down");
    navLinks.classList.remove("on-scroll-up");

    navDivs.forEach((div) => {
      div.classList.add("on-scroll-down-div");
      div.classList.remove("on-scroll-up-div");
    });
  }
  if (scroll_top <= 10) {
    nav.classList.remove("on-scroll-down");
    nav.classList.add("on-scroll-up");

    navLinks.classList.remove("on-scroll-down");
    navLinks.classList.add("on-scroll-up");

    navDivs.forEach((div) => {
      div.classList.remove("on-scroll-down-div");
      div.classList.add("on-scroll-up-div");
    });
  }
  //console.log(scroll_top);
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");
    //Animate Links
    navLinks.forEach((link, index) => {
      console.log(index);
      console.log(index / 5 + 0.5);
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

handleData();
