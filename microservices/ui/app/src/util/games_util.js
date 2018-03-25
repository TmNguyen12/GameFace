var url = "https://data.describe68.hasura-app.io/v1/query";
var requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

export const createGame = currentUserID => {
  var body = {
    type: "insert",
    args: {
      table: "games",
      objects: [
        {
          completed: "false",
          game_master: `${currentUserID}`
        }
      ]
    }
  };

  requestOptions.body = JSON.stringify(body);

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

export const fetchGame = gameID => {
  var body = {
    type: "select",
    args: {
      table: "games",
      columns: [
        "id",
        "completed",
        "game_master",
        "player2",
        "player3",
        "player4",
        "player5"
      ],
      where: {
        id: {
          $eq: `${gameID}`
        }
      }
    }
  };

  requestOptions.body = JSON.stringify(body);

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

// TODO need to have a hash of player2 - player5

var players = {
  2: "player2",
  3: "player3",
  4: "player4",
  5: "player5"
};

export const addPlayerToGame = (gameID, playerCount, playerID) => {
  //playerCount is the new player count after adding this player
  var playerDBName = players[playerCount];

  var body = {
    type: "update",
    args: {
      table: "games",
      where: {
        id: {
          $eq: `${gameID}`
        }
      },
      $set: {
        [playerDBName]: `${playerID}`
      }
    }
  };

  requestOptions.body = JSON.stringify(body);

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

export const endGame = gameID => {
  var body = {
    type: "update",
    args: {
      table: "games",
      where: {
        id: {
          $eq: `${gameID}`
        }
      },
      $set: {
        completed: true
      }
    }
  };

  requestOptions.body = JSON.stringify(body);

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
