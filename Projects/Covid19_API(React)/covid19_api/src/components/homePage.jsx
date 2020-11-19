import React from "react";

import Covid_19 from "../img/Coronavirus.png";
import CovidCountryData from "../components/CovidCountryData";
import CovidVisualization from "../components/CovidVisualization";
import CountryInfo from "../components/CountryInfo";
import CovidRanking from "../components/CovidRanking";
import CovidWorldwide from "../components/CovidWorldwide";

class HomePage extends React.Component {
 state = {
  name: "",
  flag: "",
  capital: "",
  population: 0,
  language: "",
  currency: "",
 };

 getCountryData = async () => {
  // Get input value
  let country = document.querySelector("#country").value;

  // Handle url
  let pos = country.indexOf(" ");
  if (pos !== -1) {
   country = country.replace(" ", "%20");
  }
  let url = `https://restcountries.eu/rest/v2/name/${country}`;

  // Fetching Data
  const country_data = fetch(url)
   .then((response) => response.json())
   .then((data) => {
    //console.log(data);
    this.setState({
     name: data[0].name,
     flag: data[0].flag,
     capital: data[0].capital,
     population: data[0].population,
     language: data[0].languages[0].nativeName,
     currency: data[0].currencies[0].code,
    });
   })

   .catch((error) => console.log(error));

  await this.sleep(1000);
  return country_data;
 };

 sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
 };

 render() {
  return (
   <div className="HomePage">
    <img src={Covid_19} alt="Covid_19"></img>
    <div className="main">
     <div className="container">
      <CovidWorldwide />
      <CovidCountryData />
      <CovidVisualization
       name={this.state.name}
       flag={this.state.flag}
       capital={this.state.capital}
       population={this.state.population}
       language={this.state.language}
       currency={this.state.currency}
       setCountryData={this.getCountryData}
      />
     </div>
     <div className="country-info">
      <CountryInfo className="country-card" />
      <CovidRanking />
     </div>
    </div>
   </div>
  );
 }
}

export default HomePage;
