import React, { Component } from "react";
import WebcamPicV from "./WebcamPicV";

export default class WebcamPicC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null
    };
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ image: (new Image().src = imageSrc) });
  };

  clear = () => {
    this.setState({ pic: null });
  };

  keepImage = () => {
    this.props.webcamImageCB(this.state.image);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <WebcamPicV
          setRef={this.setRef}
          videoConstraints={videoConstraints}
          capture={this.capture}
          keepImage={this.keepImage}
          image={this.state.image}
        />
      </div>
    );
  }
}
