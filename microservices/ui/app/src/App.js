import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GameLobby from "./components/GameLobby";

class App extends Component {
  render() {
    // const clusterName = process.env.REACT_APP_CLUSTER_NAME || "NoClusterName";
    return (
      <div className="App">
        <GameLobby/>
      </div>
    );
  }
}

export default App;
