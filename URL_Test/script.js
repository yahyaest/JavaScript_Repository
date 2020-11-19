let key = "8KEJ5O4T1KF36IIP";
let stock_data;
let stock_date;
let stock_price;
let url =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&outputsize=compact&apikey=8KEJ5O4T1KF36IIP";

//  let url1 = "https://api.spotify.com/v1/artists/49bzE5vRBRIota4qeHtQM8/albums"

function setup() {
  // put setup code here
  loadJSON(url, gotData); //loadJson(url, callback function, security access bypass = 'jsonp')
}

function gotData(data) {
  //console.log(data);
  stock_data = data;
}
setTimeout(function () {
  //console.log(stock_data);

  let date = Object.keys(stock_data["Time Series (Daily)"]);
  let price = [];
  for (let i = 0; i < date.length; i++) {
    price.push(stock_data["Time Series (Daily)"][date[i]]["4. close"]);
  }
  stock_date = date;
  stock_price = price;
}, 2000);

setTimeout(function () {
  console.log(stock_date);
  console.log(stock_price);
}, 3000);
