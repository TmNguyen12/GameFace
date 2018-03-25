import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from './store/store.js'; 
//import registerServiceWorker from './registerServiceWorker';
import { fetchScenario } from "./util/scenarios_util";
import { fetchUser } from "./util/users_util";
import {
  createGame,
  fetchGame,
  addPlayerToGame,
  endGame
} from "./util/games_util";

import { fetchScenarios } from "./util/scenarios_util";
import Root from './root.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore(); 
    configureStore;
    window.getState;
    window.store = store;
    window.fetchUser = fetchUser;
    window.addPlayerToGame = addPlayerToGame;
    window.createGame = createGame;
    window.endGame = endGame;
    window.fetchGame = fetchGame;
    window.fetchScenarios = fetchScenarios;
    ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
});