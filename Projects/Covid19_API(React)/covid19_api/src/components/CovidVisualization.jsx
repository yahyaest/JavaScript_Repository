import React, { Component } from "react";
import Chart from "chart.js";
import "../css/CovidVisualization.css";

class CovidVisualization extends Component {
  state = {
    Confirmed: [],
    Active: [],
    Recovered: [],
    Deaths: [],
    Dates: [],
  };

  getData = async () => {
    // Get input value
    let country = document.querySelector("#country").value;

    // Handle url
    let pos = country.indexOf(" ");
    if (pos !== -1) {
      country = country.replace(" ", "%20");
    }
    let url = `https://api.covid19api.com/dayone/country/${country}`;

    //Setting the state
    let confirmed_cases = [];
    let active_cases = [];
    let recovered_cases = [];
    let death_cases = [];
    let dates = [];

    fetch(url)
      .then((response) => response.json())
      .then(async (data) => {
        data.map((day) => {
          if (
            day.Confirmed >= confirmed_cases[confirmed_cases.length - 1] ||
            confirmed_cases.length === 0
          ) {
            confirmed_cases.push(day.Confirmed);
            active_cases.push(day.Active);
            recovered_cases.push(day.Recovered);
            death_cases.push(day.Deaths);
            dates.push(day.Date.slice(0, 10));
          }

          return 0;
        });

        this.setState({
          Confirmed: confirmed_cases,
          Active: active_cases,
          Recovered: recovered_cases,
          Deaths: death_cases,
          Dates: dates,
        });
      })
      .catch((error) => console.log(error));

    this.props.setCountryData();
    await this.sleep(1000);
    this.handleChart();

    //Handle invisible elements
    document.querySelector("#card").classList.remove("invisible");
    document.querySelector("#table").classList.remove("invisible");

    //Handle country infos
    document.querySelector("#name").innerText = this.props.name;
    document.querySelector("#flag").setAttribute("src", this.props.flag);
    document.querySelector("#flag").style.border = "2px solid white";
    document.querySelector("#capital").innerText = this.props.capital;
    document.querySelector("#population").innerText = this.props.population;
    document.querySelector("#language").innerText = this.props.language;
    document.querySelector("#currency").innerText = this.props.currency;
  };

  handleChart = () => {
    const ctx = document.getElementById("myChart");
    /* eslint-disable no-unused-vars */

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: this.state.Dates,
        datasets: [
          {
            label: "Confirmed",
            data: this.state.Confirmed,
            backgroundColor: "rgba(254, 198, 1, 0.2)",
          },
          {
            label: "Recovered",
            data: this.state.Recovered,
            backgroundColor: "rgba(206, 121, 107, 0.2)",
          },
          {
            label: "Active",
            data: this.state.Active,
            backgroundColor: "rgba(82, 183, 136, 0.2)",
          },
          {
            label: "Deaths",
            data: this.state.Deaths,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          },
        ],
      },
    });
    /* eslint-disable no-unused-vars */
  };

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  render() {
    return (
      <div className="covid-vizualisation">
        {/* <h1>We're all doomed !!!</h1> */}
        <button
          onClick={() => {
            this.getData();
          }}
          className="btn btn-danger m-2"
        >
          Visualize
        </button>
        <br></br>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    );
  }
}

export default CovidVisualization;
