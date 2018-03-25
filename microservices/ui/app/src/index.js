import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import registerServiceWorker from './registerServiceWorker';
import { fetchScenario } from "./util/scenarios_util";
import { createGame, fetchGame, updateGame } from "./util/games_util";

window.updateGame = updateGame;
window.createGame = createGame;
window.fetchGame = fetchGame;
window.fetchScenario = fetchScenario;
ReactDOM.render(<App />, document.getElementById("root"));
