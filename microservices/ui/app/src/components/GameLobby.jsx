import React, { Component } from 'react';
// import Modal from "react-modal";
import "./GameLobby.css";

class GameLobby extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   modalIsOpen: false
    // };
    // this.openModal = this.openModal.bind(this);
  }

  // modal opens when mouse click is held down
  // modal closes when mouse click is released
  // needs an event listener for mouse down and mouse up
  // if mouse down isn't on a button then run the modal
  // openModal(){
  //   this.setState({modalIsOpen: true});
  // }
  // closeModal(){
  //   this.setState({modalIsOpen: false});
  // }

  copyToClipboard(){
    let copyText = "some link we got from the current page";
    document.execCommand("Copy");
    // alert("Copied the text: ");
  }

  render(){
    return(
      <div className="lobby">
        <div className="lobby-left">
          <div className="lobby-top">
            <div className="lobby-top-header">
              <h2 className="lobby-top-round">Round 1</h2>
              <h3 className="lobby-top-scenario">Scenario</h3>
            </div>
            <div className="lobby-top-scenario-paragraph">insert random scenario here</div>
          </div>

          <div className="lobby-playerCams">
            <div className="highlightedCam cam1">
              <div className="lobby-playerCam-ready {ready}">Ready</div>
              insert cam here
            </div>
            <div className="otherCams">
              <div className="otherCams-top">
                <div className="lobby-playerCam cam2">
                  <div className="lobby-playerCam-ready {ready}">Ready</div>
                  insert cam here
                </div>
                <div className="lobby-playerCam cam3">
                  <div className="lobby-playerCam-ready {ready}">Ready</div>
                  insert cam here
                </div>
              </div>
              <div className="otherCams-bottom">
                <div className="lobby-playerCam cam4">
                  <div className="lobby-playerCam-ready {ready}">Ready</div>
                  insert cam here
                </div>
                <div className="lobby-playerCam cam5">
                  <div className="lobby-playerCam-ready {ready}">Ready</div>
                  insert cam here
                </div>
              </div>

            </div>
          </div>

          <div className="lobby-inviteLink">
            <h3 className="lobby-inviteLink-header">Invite Link</h3>
            <input  className="lobby-inviteLink-linkAddress"
                    value="  insert link address here"
                    type="text" />

            <button className="lobby-inviteLink-button"
                    onClick="copyToClipboard()">Copy</button>
          </div>
        </div>


        <div className="lobby-right">
          <div className="lobby-currentUser">
            <div className="lobby-currentUser-image">

            </div>
            <h2 className="lobby-currentUser-name">username</h2>
          </div>

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

          <div className="lobby-readyButton">
            <button
              onClick="ready()"
              className="lobby-readyButton-Button">insert Ready or not Ready</button>
          </div>

        </div>

      </div>
    );
  }

}

export default GameLobby;
