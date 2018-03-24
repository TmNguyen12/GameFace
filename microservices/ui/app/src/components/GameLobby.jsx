import React, { Component } from 'react';

class GameLobby extends Component {

  render(){
    return(
      <div>
        <div className="lobby-right">
          <div className="lobby-top">
            <h2 className="lobby-top-round">Round 1</h2>
            <h3 className="lobby-top-scenario">Scenario</h3>
            <div className="lobby-top-scenario">insert random scenario here</div>
          </div>

          <div className="lobby-playerCams">
            <div className="lobby-playerCam1"></div>
            <div className="lobby-playerCam2"></div>
            <div className="lobby-playerCam3"></div>
            <div className="lobby-playerCam4"></div>
            <div className="lobby-playerCam5"></div>
          </div>

        </div>


        <div className="lobby-left">
          <div className="lobby-standings">
            <h2 className="lobby-standing-title">Standings</h2>
            <h3>1 insert player name here</h3>
            <h3>2 insert player name here</h3>
            <h3>3 insert player name here</h3>
            <h3>4 insert player name here</h3>
            <h3>5 insert player name here</h3>
            </div>

          <div className="lobby-countdown">
            <h2 className="lobby-countdown">Countdown: insert time here</h2>
          </div>
        </div>

      </div>
    );
  }

}
