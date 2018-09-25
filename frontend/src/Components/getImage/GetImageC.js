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

  getFileName = (ext) => {
    /* Generate unique image file name */
    let user = localStorage.getItem('user').split('@')[0]
    let tags = ''
    for(var prop in this.props.tags)
    {
      if(this.props.tags[prop])
      {
        tags += '_' + prop 
      }
    }
    let dateStr = this.getDateStr()
    let timeStr = this.getTimeStr()

    return user+"_"+this.props.selectedType+tags+"_"+dateStr+"_"+timeStr+"."+ext
  }

  // Used for unique image file naming
  getDateStr = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 

    return mm+"_"+dd+"_"+yyyy
  }

  // Used for unique image file naming
  getTimeStr = () => {
    const checkTime = (i) => {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();

      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);

      return h+"_"+m+"_"+s
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

  /* Set button pressed after upload image selection */
  setUploadFileHandler = () => {
    // Change name to fit conventions
    let ext = this.state.upload_file.name.split('.').pop()
    let name = this.getFileName(ext)
    this.props.setImageName(name)
    const newFile = new File([this.state.upload_file], 
                              name, 
                              {type: this.state.upload_file.type});
    this.setState({upload_file: newFile})

    // Setup form to be passed to AddItemC
    let form = new FormData()
    form.append('', newFile)
    this.props.setImageForm(form)

    // Change modal to display the uploaded image
    this.setState({viewType: 'display_upload'})
  }

  // Set image 
  webcamImageCB = (img) => 
  {
    // Get the name
    let name = this.getFileName("png")
    this.props.setImageName(name)

    // Store in local state to display
    this.setState({webcam_image: img})

    // Base64 String -> Blob -> File
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