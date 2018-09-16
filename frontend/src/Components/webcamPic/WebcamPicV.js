import React from 'react';
import Webcam from 'react-webcam';

const WebcamPicV = (props) => {
  if(props.image)
  {
    return(
      <div>
          <img alt="not available" src={props.image} />
          <button onClick={props.keep}>Keep?</button>
      </div>
    ) 
  }
  else{
    return(
      <div>
          <Webcam
            audio={false}
            height={350}
            ref={props.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={props.videoConstraints}
          />
          <button onClick={props.capture}>Capture photo</button>
      </div>
    ) 
  }
 
}

export default WebcamPicV;