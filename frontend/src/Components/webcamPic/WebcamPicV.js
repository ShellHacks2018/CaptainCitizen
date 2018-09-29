import React from "react";
import Webcam from "react-webcam";
import Button from "@material-ui/core/Button";

const WebcamPicV = props => {
  if (props.image) {
    return (
      <div>
        <img alt="not available" src={props.image} />
        <Button onClick={props.keepImage}>Keep?</Button>
      </div>
    );
  } else {
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={props.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={props.videoConstraints}
        />
        <Button onClick={props.capture}>Capture photo</Button>
      </div>
    );
  }
};

export default WebcamPicV;
