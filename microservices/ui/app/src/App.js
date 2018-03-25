import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GameLobby from "./components/GameLobby";
import Standings from './components/Standings';
class App extends Component {
  render() {
    // const clusterName = process.env.REACT_APP_CLUSTER_NAME || "NoClusterName";
    return (
      <div className="App">
        <GameLobby/>
        <Standings/>
      </div>
    );
  }
}

export default App;
