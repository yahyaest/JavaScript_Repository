import { getData, convertData, data_dict } from "./data.js";

const alpha = alphavantage({ key: "8KEJ5O4T1KF36IIP" });
getData();
convertData();

function company_data(company) {
  let company_date = [];
  let company_price = [];

  let company_raw_data = alpha.data.daily(company).then((data) => {
    data = Object.values(data);

    let company_data = data[1];
    let company_values = Object.values(company_data);
    let company_keys = Object.keys(company_data);

    let i = 0;
    for (i = 0; i < company_keys.length; i++) {
      company_date.push(company_keys[i]);
      let temp = Object.values(company_values[i]);
      company_price.push(temp[3]);
    }
  });

  return [company_date, company_price];
}

async function chart(company_1, company_2) {
  let company1_name = document.getElementById("company1").value;
  let company2_name = document.getElementById("company2").value;
  let xlabels_1 = await company_data(company_1)[0];
  let ylabels_1 = await company_data(company_1)[1];
  //let xlabels_2 = await company_data(company_2)[0];
  let ylabels_2 = await company_data(company_2)[1];

  await sleep(1000);
  let ctx = document.getElementById("myChart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xlabels_1,
      datasets: [
        {
          label: [
            "Evolution of " +
              company1_name +
              " Stock Price In The Last 100 Days",
          ],
          data: ylabels_1,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
        {
          label: [
            "Evolution of " +
              company2_name +
              " Stock Price In The Last 100 Days",
          ],
          data: ylabels_2,
          backgroundColor: ["rgba(255, 199, 132, 0.2)"],
          borderColor: ["rgba(255, 199, 132, 1)"],
          borderWidth: 1,
        },
      ],
    },
  });
  await sleep(1000);
}

const getEmement = document.querySelector("#getData");

getEmement.addEventListener("click", async (event) => {
  document.getElementById("myChart").innerHTML =
    '<canvas id="myChart" width="800" height="300"></canvas>';

  let first_company = document.getElementById("company1").value;
  first_company = data_dict[first_company];
  let second_company = document.getElementById("company2").value;
  second_company = data_dict[second_company];

  await sleep(1000);
  chart(first_company, second_company);
});

// window.chart = chart;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
