import React, { Component } from 'react'


/* View */
import GetImageV from './GetImageV'

class GetImageC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewType: '',
      upload_image: '', // For file upload pre-submission display
      upload_file: '',  // For file upload form submission
      webcam_image: '',
      webcam_file: ''
    }
  }

  /* Image selected by user */
  fileSelectedCB = (event) => {
    // Store in local state to use in form for submission
    this.setState({upload_file: event.target.files[0]} )

    // Create new filereader
    let reader = new FileReader();
    // Decode the file data
    reader.readAsDataURL(event.target.files[0]);
    // Add result attribute to event, and store it in state to display
    reader.onload = (event) => {
        this.setState({upload_image: event.target.result});
    };
  }

  setUploadFileHandler = () =>{
    // @todo: Change name to fit conventions
    // Setup form to be passed to AddItemC
    let form = new FormData()
    form.append('', this.state.upload_file)
    this.props.setImageForm(form)

    // Change modal to display the uploaded image
    this.setState({viewType: 'display_upload'})
  }

  // Set image 
  webcamImageCB = (img) => 
  {
    // Get the name
    let name = localStorage.getItem('user').split('@')[0] + '_HELLO.png'
    
    // console.log(data)
    // Store in local state to display
    this.setState({webcam_image: img})

    // Base64 String -> Blob -> File
    // @todo: Better file naming!
    fetch(img)
    .then(res => res.blob())
    .then(blob => {
      const file = new File([blob], name)

      // Setup form to send back to AddItemC
      let form = new FormData()
      form.append('', file)
      this.props.setImageForm(form)

      // Change state to display the image
      this.setState({viewType: 'display_webcam'})
    })
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
          setUploadFileHandler={this.setUploadFileHandler}
          viewTypeCancel={this.viewTypeCancel}
          viewTypeUpload={this.viewTypeUpload}
          viewTypeCamera={this.viewTypeCamera}
          viewType={this.state.viewType}
          upload_image={this.state.upload_image}
          webcam_image={this.state.webcam_image}/>
      </div>
    )
  }
}

export default GetImageC