import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import registerServiceWorker from './registerServiceWorker';
import { fetchScenario } from "./util/scenarios_util";
import { fetchUser } from "./util/users_util";
import {
  createGame,
  fetchGame,
  addPlayerToGame,
  endGame
} from "./util/games_util";

window.fetchUser = fetchUser;
window.addPlayerToGame = addPlayerToGame;
window.createGame = createGame;
window.endGame = endGame;
window.fetchGame = fetchGame;
window.fetchScenario = fetchScenario;
ReactDOM.render(<App />, document.getElementById("root"));
