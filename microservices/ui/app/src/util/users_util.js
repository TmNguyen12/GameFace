var url = "https://data.describe68.hasura-app.io/v1/query";

var requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

export const fetchUser = userID => {
  var body = {
    type: "select",
    args: {
      table: "users",
      columns: ["id", "user_name", "display_name"],
      where: {
        id: {
          $eq: `${userID}`
        }
      }
    }
  };

  requestOptions.body = JSON.stringify(body);

  fetch(url, requestOptions)
    .then(function(response) {
      // debugger 
      return response.json();
    })
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error) {
      console.log("Request Failed:" + error);
    });
};
