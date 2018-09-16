import React, {Component} from 'react'
import WebcamPicV from './WebcamPicV';

export default class WebcamPicC extends Component{
  state = {
    image: null
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({image: new Image().src=imageSrc});
  };

  clear = () => {
    this.setState({pic: null})
  }

  keepImage = () => {
    console.log('OK!')
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <WebcamPicV 
          setRef={ this.setRef }
          videoConstraints={ videoConstraints }
          capture={this.capture}
          keep={this.keep}
          image={this.state.image}
          />
      </div>
    );
  }
}