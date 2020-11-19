const request = requirejs(["request"]);
//const request = requirejs(["express"]);
const express = requirejs(["express"]);

const app = express();
app.listen(8081, () => console.log("listening at 8081"));
app.use(express.static("public"));
//module.exports =  (app) => {
app.post("/api", function (req, res, next) {
  // request(
  //   "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=8KEJ5O4T1KF36IIP",
  //   function (error, response, body) {
  //     // console.error("error:", error); // Print the error if one occurred
  //     // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  //     // console.log("body:", body); // Print the HTML for the Google homepage.
  //     const data = JSON.parse(body);
  //     console.log(data["Meta Data"]);
  //   }
  // );

  res.send({
    success: true,
    message: "Yeah!",
    //StockData: data["Meta Data"],
  });
});
//};

//console.log("yeah");
//console.log(data["Meta Data"]);
