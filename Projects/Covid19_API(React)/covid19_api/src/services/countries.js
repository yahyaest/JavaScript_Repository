export async function getTopCountries() {
  let allCountriesData = [];
  let url = "";
  let countries_confirmed = [];
  let covid_table = [];

  // Fetching API Data
  url = `https://corona.lmao.ninja/v2/countries`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log("newest", data);
      allCountriesData = data;
    })
    .catch((error) => console.log(error));

  await sleep(1000);

  // Create countries confirmed cases table
  allCountriesData.map((Country) => {
    let covid_countries = {
      name: "",
      confirmed: 0,
    };
    countries_confirmed.push(Country.cases);
    covid_countries.name = Country.country;
    covid_countries.confirmed = Country.cases;
    covid_table.push(covid_countries);

    return covid_countries;
  });

  // Sorting countries_confirmed
  selectionSort(countries_confirmed);

  // Get top 10 affected countries
  const top_countries = countries_confirmed.slice(0, 10);
  let selected_countries = [];
  for (let i = 0; i < top_countries.length; i++) {
    for (let j = 0; j < covid_table.length; j++) {
      if (covid_table[j].confirmed === top_countries[i]) {
        selected_countries.push(covid_table[j].name);
      }
    }
  }
  //console.log("final", selected_countries);
  return selected_countries;
}

export async function countriesResults() {
  let topCountries = [];
  let confirmed = [];
  let recovered = [];
  let deaths = [];
  let alpha2Code_table = [];

  let countries = await getTopCountries();
  await sleep(500);
  countries.map((country) => {
    let url = `https://corona.lmao.ninja/v2/countries/${country}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        topCountries.push(country);
        confirmed.push(data.cases);
        recovered.push(data.recovered);
        deaths.push(data.deaths);
        alpha2Code_table.push(data.countryInfo.iso2.toLowerCase());
      })
      .catch((error) => console.log(error));
    return 0;
  });
  return [topCountries, confirmed, recovered, deaths, alpha2Code_table];
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let max = array[i];
    let max_index = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] >= max) {
        max = array[j];
        max_index = j;
      }
    }
    swap(i, max_index, array);
  }
}

function swap(a, b, array) {
  let aux = array[a];
  array[a] = array[b];
  array[b] = aux;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function timeConverter(UNIX_timestamp) {
  let currentTime = new Date(UNIX_timestamp);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let year = currentTime.getFullYear();
  let month = months[currentTime.getMonth()];
  let date = currentTime.getDate();
  let hour = currentTime.getHours() - 1;
  let min =
    currentTime.getMinutes() > 9
      ? currentTime.getMinutes()
      : "0" + currentTime.getMinutes();
  let sec =
    currentTime.getSeconds() > 9
      ? currentTime.getSeconds()
      : "0" + currentTime.getSeconds();
  let time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}
