import React, { Component } from "react";
import Video from "./Video";
// import Modal from "react-modal";
import "./GameLobby.css";
import Standings from './Standings';

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

  copyToClipboard() {
    // let copyText = "some link we got from the current page";
    var copyText = document.querySelector("#linkAddress");
    copyText.select();
    document.execCommand("Copy");
    // alert("Copied the text: ");
  }

  render() {
    return (
      <div className="lobby">
        <div className="lobby-left">
          <div className="lobby-top">
            <div className="lobby-top-header">
              <h2 className="lobby-top-round">Round 1</h2>
<<<<<<< HEAD
              <h2 className="lobby-top-scenario">Scenario</h2>
=======
>>>>>>> e33e0de10c34367441bcf7cea71befe1d355b554
            </div>
            <div className="lobby-top-scenario-paragraph-div">
              <h3 className="lobby-top-scenario-paragraph">
                insert random scenario here
              </h3>
            </div>
          </div>

          <div className="lobby-playerCams">
            <div className="highlightedCam cam1">
              <div className="lobby-playerCam-ready {ready}">Ready</div>
<<<<<<< HEAD
              <Video
                apiKey="46086932"
                sessionId="2_MX40NjA4NjkzMn5-MTUyMTkyODcyMTc3OX5Qalc3NGhUUDFITzRYYnJyN1JwN0ZtL1d-fg"
                token="T1==cGFydG5lcl9pZD00NjA4NjkzMiZzaWc9NTFlODI0MTBkYjRmOWIwNmYzY2QzMzIyYjU3ZWMzYjk3ZTFkYTI5NDpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamt6TW41LU1UVXlNVGt5T0RjeU1UYzNPWDVRYWxjM05HaFVVREZJVHpSWVluSnlOMUp3TjBadEwxZC1mZyZjcmVhdGVfdGltZT0xNTIxOTMzMjgxJm5vbmNlPTAuMzM4MTY3ODExNTgwMTE4NTUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyNDUyNTI4MCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="
              />
=======
              <Video  className="lobby-playerCam-video1"
                      apiKey="46086932"
                      sessionId="2_MX40NjA4NjkzMn5-MTUyMTkyODcyMTc3OX5Qalc3NGhUUDFITzRYYnJyN1JwN0ZtL1d-fg"
                      token="T1==cGFydG5lcl9pZD00NjA4NjkzMiZzaWc9NTFlODI0MTBkYjRmOWIwNmYzY2QzMzIyYjU3ZWMzYjk3ZTFkYTI5NDpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamt6TW41LU1UVXlNVGt5T0RjeU1UYzNPWDVRYWxjM05HaFVVREZJVHpSWVluSnlOMUp3TjBadEwxZC1mZyZjcmVhdGVfdGltZT0xNTIxOTMzMjgxJm5vbmNlPTAuMzM4MTY3ODExNTgwMTE4NTUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyNDUyNTI4MCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==" />
>>>>>>> e33e0de10c34367441bcf7cea71befe1d355b554
            </div>

            <div className="otherCams">
              <div className="otherCams-top">
                <div className="lobby-playerCam cam2">
                  <div className="lobby-playerCam-ready {ready}">Ready</div>
<<<<<<< HEAD
                  <Video
                    apiKey="46086932"
                    sessionId="2_MX40NjA4NjkzMn5-MTUyMTkyODcyMTc3OX5Qalc3NGhUUDFITzRYYnJyN1JwN0ZtL1d-fg"
                    token="T1==cGFydG5lcl9pZD00NjA4NjkzMiZzaWc9NTFlODI0MTBkYjRmOWIwNmYzY2QzMzIyYjU3ZWMzYjk3ZTFkYTI5NDpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamt6TW41LU1UVXlNVGt5T0RjeU1UYzNPWDVRYWxjM05HaFVVREZJVHpSWVluSnlOMUp3TjBadEwxZC1mZyZjcmVhdGVfdGltZT0xNTIxOTMzMjgxJm5vbmNlPTAuMzM4MTY3ODExNTgwMTE4NTUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyNDUyNTI4MCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="
                  />
=======
                  <Video  className="lobby-playerCam-video2"
                          apiKey="46086932"
                          sessionId="2_MX40NjA4NjkzMn5-MTUyMTkyODcyMTc3OX5Qalc3NGhUUDFITzRYYnJyN1JwN0ZtL1d-fg"
                          token="T1==cGFydG5lcl9pZD00NjA4NjkzMiZzaWc9NTFlODI0MTBkYjRmOWIwNmYzY2QzMzIyYjU3ZWMzYjk3ZTFkYTI5NDpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamt6TW41LU1UVXlNVGt5T0RjeU1UYzNPWDVRYWxjM05HaFVVREZJVHpSWVluSnlOMUp3TjBadEwxZC1mZyZjcmVhdGVfdGltZT0xNTIxOTMzMjgxJm5vbmNlPTAuMzM4MTY3ODExNTgwMTE4NTUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyNDUyNTI4MCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==" />
>>>>>>> e33e0de10c34367441bcf7cea71befe1d355b554
                </div>
                <div className="lobby-playerCam cam3">
                  <div className="lobby-playerCam-ready {ready}">Ready</div>
                  <Video
<<<<<<< HEAD
=======
                    className="lobby-playerCam-video3"
>>>>>>> e33e0de10c34367441bcf7cea71befe1d355b554
                    apiKey="46086932"
                    sessionId="2_MX40NjA4NjkzMn5-MTUyMTkyODcyMTc3OX5Qalc3NGhUUDFITzRYYnJyN1JwN0ZtL1d-fg"
                    token="T1==cGFydG5lcl9pZD00NjA4NjkzMiZzaWc9NTFlODI0MTBkYjRmOWIwNmYzY2QzMzIyYjU3ZWMzYjk3ZTFkYTI5NDpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamt6TW41LU1UVXlNVGt5T0RjeU1UYzNPWDVRYWxjM05HaFVVREZJVHpSWVluSnlOMUp3TjBadEwxZC1mZyZjcmVhdGVfdGltZT0xNTIxOTMzMjgxJm5vbmNlPTAuMzM4MTY3ODExNTgwMTE4NTUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyNDUyNTI4MCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="
                  />
                </div>
              </div>

              <div className="otherCams-bottom">
                <div className="lobby-playerCam cam4">
                  <div className="lobby-playerCam-ready {ready}">Ready</div>
                  <Video
<<<<<<< HEAD
=======
                    className="lobby-playerCam-video4"
>>>>>>> e33e0de10c34367441bcf7cea71befe1d355b554
                    apiKey="46086932"
                    sessionId="2_MX40NjA4NjkzMn5-MTUyMTkyODcyMTc3OX5Qalc3NGhUUDFITzRYYnJyN1JwN0ZtL1d-fg"
                    token="T1==cGFydG5lcl9pZD00NjA4NjkzMiZzaWc9NTFlODI0MTBkYjRmOWIwNmYzY2QzMzIyYjU3ZWMzYjk3ZTFkYTI5NDpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamt6TW41LU1UVXlNVGt5T0RjeU1UYzNPWDVRYWxjM05HaFVVREZJVHpSWVluSnlOMUp3TjBadEwxZC1mZyZjcmVhdGVfdGltZT0xNTIxOTMzMjgxJm5vbmNlPTAuMzM4MTY3ODExNTgwMTE4NTUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyNDUyNTI4MCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="
                  />
                </div>
                <div className="lobby-playerCam cam5">
                  <div className="lobby-playerCam-ready {ready}">Ready</div>
                  <Video
<<<<<<< HEAD
=======
                    className="lobby-playerCam-video5"
>>>>>>> e33e0de10c34367441bcf7cea71befe1d355b554
                    apiKey="46086932"
                    sessionId="2_MX40NjA4NjkzMn5-MTUyMTkyODcyMTc3OX5Qalc3NGhUUDFITzRYYnJyN1JwN0ZtL1d-fg"
                    token="T1==cGFydG5lcl9pZD00NjA4NjkzMiZzaWc9NTFlODI0MTBkYjRmOWIwNmYzY2QzMzIyYjU3ZWMzYjk3ZTFkYTI5NDpzZXNzaW9uX2lkPTJfTVg0ME5qQTROamt6TW41LU1UVXlNVGt5T0RjeU1UYzNPWDVRYWxjM05HaFVVREZJVHpSWVluSnlOMUp3TjBadEwxZC1mZyZjcmVhdGVfdGltZT0xNTIxOTMzMjgxJm5vbmNlPTAuMzM4MTY3ODExNTgwMTE4NTUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyNDUyNTI4MCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lobby-inviteLink">
            <h3 className="lobby-inviteLink-header">Invite Link</h3>
            <input
<<<<<<< HEAD
=======
              id="linkAddress"
>>>>>>> e33e0de10c34367441bcf7cea71befe1d355b554
              className="lobby-inviteLink-linkAddress"
              value="  insert link address here"
              type="text"
            />
            <button
              className="lobby-inviteLink-button"
<<<<<<< HEAD
              onClick="copyToClipboard()"
=======
              onClick={this.copyToClipboard}
>>>>>>> e33e0de10c34367441bcf7cea71befe1d355b554
            >
              Copy
            </button>
          </div>
        </div>

        <div className="lobby-right">
          <div className="lobby-currentUser">
<<<<<<< HEAD
            <div className="lobby-currentUser-image" />
            <h2 className="lobby-currentUser-name">username</h2>
          </div>

          <div className="lobby-standings">
          <Standings />
            {/* <h2 className="lobby-standing-title">Standings</h2>
            <h3 className="lobby-standing-name">1st insert player name here</h3>
            <h3 className="lobby-standing-score">
              insert 1st place player score here
            </h3>
            <h3 className="lobby-standing-name">2nd insert player name here</h3>
            <h3 className="lobby-standing-score">
              insert 2nd place player score here
            </h3>
            <h3 className="lobby-standing-name">3rd insert player name here</h3>
            <h3 className="lobby-standing-score">
              insert 3rd place player score here
            </h3>
            <h3 className="lobby-standing-name">4th insert player name here</h3>
            <h3 className="lobby-standing-score">
              insert 4th place player score here
            </h3>
            <h3 className="lobby-standing-name">5th insert player name here</h3>
            <h3 className="lobby-standing-score">
              insert 5th place player score here
            </h3> */}
          </div>

          <div className="lobby-timer">
            <h2 className="lobby-timer-header">Timer</h2>
            <h2 className="lobby-timer-time">countdown here</h2>
          </div>

=======

            <img  className="lobby-currentUser-image"
                  alt="user-img"
                  src="https://openclipart.org/image/2400px/svg_to_png/247319/abstract-user-flat-3.png"/>
                <h2 className="lobby-currentUser-name">user1</h2>
          </div>

          <div className="lobby-standings">
            <h2 className="lobby-standing-title">STANDINGS</h2>
            <div className="lobby-standing-place-name">
              <h3 className="lobby-standing-place">1st</h3>
              <h3 className="lobby-standing-name">user1</h3>
            </div>
            <h3 className="lobby-standing-score">
              479
            </h3>
            <div className="lobby-standing-place-name">
              <h3 className="lobby-standing-place">2nd</h3>
              <h3 className="lobby-standing-name">user2</h3>
            </div>
            <h3 className="lobby-standing-score">
              250
            </h3>
            <div className="lobby-standing-place-name">
              <h3 className="lobby-standing-place">3rd</h3>
              <h3 className="lobby-standing-name">user3</h3>
            </div>
            <h3 className="lobby-standing-score">
              250
            </h3>
            <div className="lobby-standing-place-name">
              <h3 className="lobby-standing-place">4th</h3>
              <h3 className="lobby-standing-name">user4</h3>
            </div>
            <h3 className="lobby-standing-score">
              250
            </h3>
            <div className="lobby-standing-place-name">
              <h3 className="lobby-standing-place">5th</h3>
              <h3 className="lobby-standing-name">user5</h3>
            </div>
            <h3 className="lobby-standing-score">
              25
            </h3>
          </div>

          <div className="lobby-timer">
            <h2 className="lobby-timer-header">Timer</h2>
            <h2 className="lobby-timer-time">20</h2>
          </div>

>>>>>>> e33e0de10c34367441bcf7cea71befe1d355b554
          <div className="lobby-readyButton">
            <button onClick={"ready()"} className="lobby-readyButton-Button">
              Ready
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameLobby;
