import React from 'react';

import WebcamPicC from '../webcamPic/WebcamPicC'
import CameraIcon from '@material-ui/icons/CameraAlt';
import PhotoIcon from '@material-ui/icons/Photo';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const GetImageV = (props) => {
      if (props.viewType === 'display_upload')
      {
        return(
          <div>
            <img alt="Your pic should be here!!!" src={props.upload_image} />
            {/* <button >Keep?</button> */}
          </div>
        );
      }
      else if (props.viewType === 'display_webcam')
      {
        return(
          <div>
            <img alt="Your pic should be here!!!" src={props.webcam_image} />
            {/* <button >Keep?</button> */}
          </div>
        );
      }
      else if (props.viewType === 'upload')
      {
        return(
          <div>  
            <Paper>         
            <InputLabel>Select File</InputLabel>
            <Input color="primary" type='file' onChange={props.fileSelectedCB}/>
            <Button color="primary" onClick={props.setUploadFileHandler}> Set </Button>
            <Button color="secondary" onClick={props.viewTypeCancel}> Cancel </Button>
            </Paper>
          </div>
        )
      }
      else if (props.viewType === 'camera')
      {
        return(
          <div>
            <Paper>
            <WebcamPicC getImageForm={props.getImageForm} webcamImageCB={props.webcamImageCB} />
            <Button color="secondary" onClick={props.viewTypeCancel}> Cancel </Button>
            </Paper>
          </div>
        )
      }
      else{
        return(
          <div>
            <Paper>
            <Button color="primary" onClick={props.viewTypeUpload}> <PhotoIcon /> </Button>
            <Button color="primary" onClick={props.viewTypeCamera}> <CameraIcon /> </Button>
            </Paper>
          </div>
        )
      }
}

export default GetImageV;