import { getData, convertData, data_dict } from "./data.js";

async function suggestionBox() {
  await sleep(500);
  const companies = Object.keys(data_dict);
  console.log(companies);

  const searchInput1 = document.querySelector("#search-company1");
  const searchInput2 = document.querySelector("#search-company2");
  const suggestionsPanel1 = document.querySelector(".suggestion-1");
  const suggestionsPanel2 = document.querySelector(".suggestion-2");

  searchInput1.addEventListener("keyup", function () {
    const input = searchInput1.value;
    suggestionsPanel1.innerHTML = "";
    const suggestions = companies.filter(function (company) {
      //console.log(company, input);
      return company.toLowerCase().startsWith(input);
    });
    //console.log(suggestions);
    suggestions.forEach(function (suggested) {
      const div = document.createElement("div");
      div.innerHTML = suggested;
      suggestionsPanel1.appendChild(div);
    });

    if (input === "") {
      suggestionsPanel1.innerHTML = "";
    }
  });

  searchInput2.addEventListener("keyup", function () {
    const input = searchInput2.value;
    suggestionsPanel2.innerHTML = "";
    const suggestions = companies.filter(function (company) {
      //console.log(company, input);
      return company.toLowerCase().startsWith(input);
    });
    //console.log(suggestions);
    suggestions.forEach(function (suggested) {
      const div = document.createElement("div");
      div.innerHTML = suggested;
      suggestionsPanel2.appendChild(div);
    });

    if (input === "") {
      suggestionsPanel2.innerHTML = "";
    }
  });

  suggestionsPanel1.addEventListener("click", (event) => {
    let choice = event.target.textContent;
    console.log(choice);
    searchInput1.value = choice;
    suggestionsPanel1.innerHTML = "";
  });

  suggestionsPanel2.addEventListener("click", (event) => {
    let choice = event.target.textContent;
    console.log(choice);
    searchInput2.value = choice;
    suggestionsPanel2.innerHTML = "";
  });
}

suggestionBox();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
