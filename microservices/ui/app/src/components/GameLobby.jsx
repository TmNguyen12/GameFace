import React, { Component } from 'react';
import Modal from "react-modal";

class GameLobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  // modal opens when mouse click is held down
  // modal closes when mouse click is released
  // needs an event listener for mouse down and mouse up
  // if mouse down isn't on a button then run the modal
  openModal(){
    this.setState({modalIsOpen: true});
  }
  closeModal(){
    this.setState({modalIsOpen: false});
  }

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
            <div className="lobby-playerCam1">
              <div className="lobby-playerCam1-ready">ready box here</div>
              insert cam here
            </div>
            <div className="lobby-playerCam2">
              <div className="lobby-playerCam2-ready">ready box here</div>
              insert cam here
            </div>
            <div className="lobby-playerCam3">
              <div className="lobby-playerCam3-ready">ready box here</div>
              insert cam here
            </div>
            <div className="lobby-playerCam4">
              <div className="lobby-playerCam4-ready">ready box here</div>
              insert cam here
            </div>
            <div className="lobby-playerCam5">
              <div className="lobby-playerCam5-ready">ready box here</div>
              insert cam here
            </div>
          </div>

          <div className="lobby-inviteLink">
            <h3 className="lobby-inviteLink-header">Invite Link</h3>
            <input  className="lobby-inviteLink-linkAddress"
                    type="text">
              insert link address here
            </input>
            <button className="lobby-inviteLink-button"
                    onClick="copyToClipboard()">Copy</button>
          </div>
        </div>


        <div className="lobby-left">
          <div className="lobby-standings">
            <h2 className="lobby-standing-title">Standings</h2>
            <h3 className="lobby-standing-1name">1 insert player name here</h3>
            <h3 className="lobby-standing-1score">insert 1st place player score here</h3>
            <h3 className="lobby-standing-2name">2 insert player name here</h3>
            <h3 className="lobby-standing-1score">insert 2nd place player score here</h3>
            <h3 className="lobby-standing-3name">3 insert player name here</h3>
            <h3 className="lobby-standing-1score">insert 3rd place player score here</h3>
            <h3 className="lobby-standing-4name">4 insert player name here</h3>
            <h3 className="lobby-standing-1score">insert 4th place player score here</h3>
            <h3 className="lobby-standing-5name">5 insert player name here</h3>
            <h3 className="lobby-standing-1score">insert 5th place player score here</h3>
            </div>

          <div className="lobby-timer">
            <h2 className="lobby-timer">Timer: insert timer here</h2>
          </div>
        </div>

      </div>
    );
  }

}
