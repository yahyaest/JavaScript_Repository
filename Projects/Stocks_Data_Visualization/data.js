export let name_list = new Array();
export let symbole_list = new Array();
export let data_dict = new Object();

///Promise.resolve methode

// let data = Promise.resolve(
//   fetch("./Stocks.json")
//     .then((results) => results.json())
//     .then((data) => {
//       for (let index of data) {
//         name_list.push(index.name);
//         symbole_list.push(index.symbole);
//       }
//       //console.log(name_list);
//       //console.log(symbole_list);
//       return [name_list, symbole_list];
//     })
// );

// data.then(function (result) {
//   for (let index of result[0]) {
//     console.log(index);
//   }
//   for (let index of result[1]) {
//     console.log(index);
//   }
// });

export async function fetchJson() {
  fetch("./Stocks.json")
    .then((results) => results.json())
    .then((data) => {
      for (let index of data) {
        data_dict[index.name] = index.symbole;
        name_list.push(index.name);
        symbole_list.push(index.symbole);
      }

      return [name_list, symbole_list];
    });
}
fetchJson();
export async function getData() {
  //await fetchJson();
  await sleep(1000);
  console.log(name_list);
  console.log(symbole_list);
  for (let index of name_list) {
    let stock_name = document.createElement("option");
    stock_name.innerText = index;
    let stock_name2 = document.createElement("option");
    stock_name2.innerText = index;
    document.getElementById("company1").appendChild(stock_name);
    document.getElementById("company2").appendChild(stock_name2);
  }
}

export async function convertData() {
  const selectCompany1 = document.querySelector("#company1");

  selectCompany1.addEventListener("change", (event) => {
    let first_company = document.getElementById("company1").value;
    first_company = data_dict[first_company];
    console.log("1", first_company);
  });

  const selectCompany2 = document.querySelector("#company2");

  selectCompany2.addEventListener("change", (event) => {
    let second_company = document.getElementById("company2").value;
    second_company = data_dict[second_company];
    console.log("2", second_company);
  });

  //console.log(first_company, second_company);
  //return [first_company, second_company];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
