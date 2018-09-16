import React, { Component } from 'react'
import {upload_url} from '../../config.js'
import axios from 'axios'

/* View */
import GetImageV from './GetImageV'

class GetImageC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewType: '',
      upload_image: '',
      webcam_image: ''
    }
  }

  /* Image selected by user */
  fileSelectedCB = (event) => {
    // this.setState({image: event.target.files[0]} )
    var reader = new FileReader();
    // reader.onloadend = () => {
    //   console.log('RESULT', reader.result)
    // }
    reader.readAsDataURL(event.target.files[0]);
  }

  setUploadFileHandler = () =>{
    console.log("uploading " + this.state.upload_image.name)
    this.setState({viewType: 'display_upload'})
    // let form = new FormData()
    // form.append('image', this.state.upload_image, this.state.upload_image.name)
    // axios.post(upload_url, form).then((res)=>{
    //   console.log(res.body)
    // }).catch((err)=>{console.log(err)})
    console.log('uploaded!')
  }

  // Set image 
  webcamImageCB = (img) => 
  {
    this.setState({webcam_image: img})
  }

  setWebcamFileHandler = () => {
    this.setState({viewType: 'display_webcam'})
  }

  viewTypeCancel = () => {
    this.setState({viewType: ''})
  }

  viewTypeUpload = () => {
    this.setState({viewType: 'upload'})
  }
  
  viewTypeCamera = (al) => {
    this.setState({viewType: 'camera'})
  }

  render () {
    return (
      <div>
        <GetImageV 
          fileSelectedCB={this.fileSelectedCB}
          webcamImageCB={this.webcamImageCB}
          selectFileHandler={this.selectFileHandler}
          viewTypeCancel={this.viewTypeCancel}
          viewTypeUpload={this.viewTypeUpload}
          viewTypeCamera={this.viewTypeCamera}
          viewType={this.state.viewType}
          upload_image={this.upload_image}
          webcam_image={this.webcam_image}/>
      </div>
    )
  }
}

export default GetImageC