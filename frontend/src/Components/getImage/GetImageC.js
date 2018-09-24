import React, { Component } from 'react'


/* View */
import GetImageV from './GetImageV'

class GetImageC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewType: '',
      upload_image: '', // For pre-submission display
      upload_file: '',  // For form submission
      webcam_image: ''
    }
  }

  /* Image selected by user */
  fileSelectedCB = (event) => {
    // Store in local state to use later
    this.setState({upload_file: event.target.files[0]} )

    let reader = new FileReader();
    reader.onload = (event) => {
        this.setState({upload_image: event.target.result});
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  setUploadFileHandler = () =>{
    console.log("uploading " + this.state.upload_image.name)

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
    // let name = localStorage.getItem('username') + '_HELLO!'
    let data = img.split(',')[1]
    // console.log(data)
    // Store in local state to display
    this.setState({webcam_image: img})

    // Setup form to send back to AddItemC
    let form = new FormData()
    form.append('image_data', data)
    this.props.setImageForm(form)

    // axios.post(upload_url, form).then((res)=>{
    //     console.log(res.body)
    //   }).catch((err)=>{console.log(err)})

    // Change state to display the image
    this.setState({viewType: 'display_webcam'})
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