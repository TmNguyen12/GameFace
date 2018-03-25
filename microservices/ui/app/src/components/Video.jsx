import React, { Component } from "react";
import request from "superagent";
import $ from "jquery";
// import { OTSession, OTPublisher, OTStreams, OTSubscriber, preloadScript } from "opentok-react";
const OT = require("@opentok/client");
const publisher = OT.initPublisher();

const CLOUDINARY_UPLOAD_PRESET = "gdhkqlqn_preset";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/gdhkqlqn/image/upload";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      connected: false,
      img: ""
    };
    console.log(publisher);

    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
    this.handleError = this.handleError.bind(this);
    this.upload = this.upload.bind(this);
    this.processImage = this.processImage.bind(this);
  }

  onError = err => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  };

  componentDidMount() {
    // console.log(OTPublisher.prototype);
    this.initializeSession();
  }

  handleError(error) {
    if (error) {
      alert(error.message);
    }
  }

  initializeSession() {
    let session = OT.initSession(this.props.apiKey, this.props.sessionId);
    let img;
    let that = this;
    session
      .connect(this.props.token, function(err) {
        if (err) {
          this.handleError(err);
        } else {
          session.publish(publisher);
          session.on("streamCreated", function(e) {
            console.log("ewfpowf");
            var imgData = publisher.getImgData();
            img = document.createElement("img");
            img.setAttribute("src", "data:image/png;base64," + imgData);
            document.body.appendChild(img);
            // console.log(img.src);
            that.upload(img.src);
          });
        }
      });

  }

  upload(img) {
      this.setState({img});
      this.handleImageUpload(img);
  }


  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file)
      .field("api_key", '398329521435955');

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== "") {
        this.setState({
          img: response.body.secure_url
        });
      }
      this.processImage(this.state.img);
    });
  }

  processImage(img) {
  // **********************************************
  // *** Update or verify the following values. ***
  // **********************************************

  // Replace the subscriptionKey string value with your valid subscription key.
  var subscriptionKey = "9e7f00b1a2a14fe2b101d9b5c3b0f60d";

  // Replace or verify the region.
  //
  // You must use the same region in your REST API call as you used to obtain your subscription keys.
  // For example, if you obtained your subscription keys from the westus region, replace
  // "westcentralus" in the URI below with "westus".
  //
  // NOTE: Free trial subscription keys are generated in the westcentralus region, so if you are using
  // a free trial subscription key, you should not need to change this region.
  var uriBase =
    "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";

  // Request parameters.
  var params = {
    returnFaceId: "true",
    returnFaceLandmarks: "false",
    returnFaceAttributes: "emotion,blur,exposure,noise"
  };

  // Display the image.

  // Perform the REST API call.
  $.ajax({
    url: uriBase + "?" + $.param(params),

    // Request headers.
    beforeSend: function(xhrObj) {
      xhrObj.setRequestHeader("Content-Type", "application/json");
      xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
    },

    type: "POST",

    // Request body.
    data: '{"url": ' + '"' + img + '"}'
  })

    .done(function(data) {
      // Show formatted JSON on webpage.
      console.log(JSON.stringify(data, null, 2));
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
      // Display error message.
    //   var errorString =
    //     errorThrown === ""
    //       ? "Error. "
    //       : errorThrown + " (" + jqXHR.status + "): ";
    //   errorString +=
    //     jqXHR.responseText === ""
    //       ? ""
    //       : jQuery.parseJSON(jqXHR.responseText).message
    //         ? jQuery.parseJSON(jqXHR.responseText).message
    //         : jQuery.parseJSON(jqXHR.responseText).error.message;
    //   alert(errorString);
    
    });
}

  render() {
    return <div />;
  }
}

export default Video;
