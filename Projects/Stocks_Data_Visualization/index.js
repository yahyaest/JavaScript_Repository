const alpha = alphavantage({ key: "8KEJ5O4T1KF36IIP" });

function get_first_company() {
  let first_company = document.getElementById("company1").value;
  //console.log(first_company);
  return first_company;
}

function get_second_company() {
  let second_company = document.getElementById("company2").value;
  // console.log(second_company);
  return second_company;
}

function first_company() {
  let company = get_first_company();
  let first_company_date = [];
  let first_company_price = [];

  let first_company_raw_data = alpha.data.daily(company).then((data) => {
    //console.log(data);

    // Object.keys(obj) – returns an array of keys.
    // Object.values(obj) – returns an array of values.
    // Object.entries(obj) – returns an array of [key, value] pairs.

    data = Object.values(data);

    let first_company_data = data[1];
    let first_company_values = Object.values(first_company_data);
    let first_company_keys = Object.keys(first_company_data);

    //console.log("first_company_data = ", first_company_data);
    //console.log("first_company_values = ", first_company_values);
    //console.log("first_company_keys = ", first_company_keys);

    let i = 0;
    for (i = 0; i < first_company_keys.length; i++) {
      first_company_date.push(first_company_keys[i]);
      let temp = Object.values(first_company_values[i]);
      first_company_price.push(temp[3]);
    }

    //console.log("first_company_date = ", first_company_date);
    //console.log("first_company_price = ", first_company_price);

    // Convert JSON Object to JSON String
    //let x = JSON.stringify(data);
    //console.log("x = ", x);

    // Convert JSON String to JSON Object
    // let y = JSON.parse(x);
    //console.log("y = ", y);
  });

  return [first_company_date, first_company_price];
}

function second_company() {
  let company = get_second_company();
  let second_company_date = [];
  let second_company_price = [];

  let second_company_raw_data = alpha.data.daily(company).then((data) => {
    //console.log(data);

    data = Object.values(data);

    let second_company_data = data[1];
    let second_company_values = Object.values(second_company_data);
    let second_company_keys = Object.keys(second_company_data);

    let i = 0;
    for (i = 0; i < second_company_keys.length; i++) {
      second_company_date.push(second_company_keys[i]);
      let temp = Object.values(second_company_values[i]);
      second_company_price.push(temp[3]);
    }

    //console.log("second_company_date = ", second_company_date);
    //console.log("second_company_price = ", second_company_price);
  });
  return [second_company_date, second_company_price];
}

async function chart() {
  let company_1 = await get_first_company();
  let company_2 = await get_second_company();
  let xlabels_1 = await first_company()[0];
  let ylabels_1 = await first_company()[1];
  //let xlabels_2 = await second_company()[0];
  let ylabels_2 = await second_company()[1];

  setTimeout(function () {
    let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: xlabels_1,
        datasets: [
          {
            label: [
              "Evolution of " + company_1 + " Stock Price In The Last 100 Days",
            ],
            data: ylabels_1,
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
          {
            label: [
              "Evolution of " + company_2 + " Stock Price In The Last 100 Days",
            ],
            data: ylabels_2,
            backgroundColor: ["rgba(255, 199, 132, 0.2)"],
            borderColor: ["rgba(255, 199, 132, 1)"],
            borderWidth: 1,
          },
        ],
      },
    });
  }, 3000);
}

function test() {
  let xlabels = first_company()[0];
  let ylabels = first_company()[1];
  setTimeout(function () {
    console.log("X =", xlabels);
    console.log("Y =", ylabels);

    let TESTER = document.getElementById("tester");
    Plotly.newPlot(
      TESTER,
      [
        {
          x: xlabels,
          y: ylabels,
        },
      ],
      {
        margin: { t: 0 },
      }
    );
  }, 2000);
}
