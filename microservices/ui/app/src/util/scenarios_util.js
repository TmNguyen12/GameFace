// var fetchAction = require("fetch");

var url = "https://data.describe68.hasura-app.io/v1/query";

var requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

var body = {
  type: "select",
  args: {
    table: "scenarios",
    columns: ["id", "text", "emotion"]
  }
};

requestOptions.body = JSON.stringify(body);

export const fetchScenarios = id => {
  fetch(url, requestOptions)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error) {
      console.log("Request Failed:" + error);
    });
};
