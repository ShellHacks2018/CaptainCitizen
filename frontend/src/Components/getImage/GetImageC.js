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
      image: ''
    }
  }

  /* Image selected by user */
  fileSelectedCB = (event) => {
    this.setState({image: event.target.files[0]} )
  }

  selectFileHandler = () =>{
    console.log("uploading " + this.state.image.name)
    this.setState({viewType: 'display'})
    // let form = new FormData()
    // form.append('image', this.state.image, this.state.image.name)
    // axios.post(upload_url, form).then((res)=>{
    //   console.log(res.body)
    // }).catch((err)=>{console.log(err)})
    console.log('uploaded!')
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
          selectFileHandler={this.selectFileHandler}
          viewTypeCancel={this.viewTypeCancel}
          viewTypeUpload={this.viewTypeUpload}
          viewTypeCamera={this.viewTypeCamera}
          viewType={this.state.viewType}
          image={this.image}/>
      </div>
    )
  }
}

export default GetImageC