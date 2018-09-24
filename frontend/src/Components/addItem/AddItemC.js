import React, { Component } from 'react'
import axios from 'axios'

import AddItemV from './AddItemV'

class AddItemC extends Component {
  state = {
    formOpen: false,
    selectedType: 'post',
    image_form: '',
    post_tags: {
        event: false,
        food: false,
        place: false,
        cultural: false
        },
    issue_tags: {
        infrastructure: false,
        illegal_dumping: false,
        biohazard: false
        }
    }

  getTags = () => {
  // Used by GetImageC to create the file name
    return {
      post_tags: this.state.post_tags,
      issue_tags: this.state.issue_tags
    }
  }

  setImageForm = (form) => {
    this.setState({image_form: form})
  }

  formOpenCB = () => {
    // Display the form when called by setting state
    this.setState({ formOpen: true });
  };

  formCloseCB = () => {
    // Close the form
    this.setState({ formOpen: false });

    // post data to mapItems
    console.log(this.state.image_form)

    // Post image to s3
    axios.post(process.env.REACT_APP_UPLOAD_URL, this.state.image_form).then((res)=>{
      console.log(res.body)
    }).catch((err)=>{console.log(err)})
  };

  formCancelCB = () => {
    // Close the form
    this.setState({ formOpen: false });
  }

  postClicked = (name) => event => {
    // [name] is called "computed property name"
    // Allows for variablly setting state in a single fuction!
    this.setState({ ...this.state, 
                    post_tags: {
                      ...this.state.post_tags,
                      [name]: event.target.checked }
                  });
  };

  issuesClicked = (name) => event => {
    // [name] is called "computed property name"
    // Allows for variablly setting state in a single fuction!
    this.setState({ ...this.state, 
                    issue_tags: {
                      ...this.state.issue_tags,
                      [name]: event.target.checked }
                  });
  };

  typeChangeCB = (event) => {
    this.setState({ selectedType: event.target.value });
  }
  
  render () 
  {
    let tags = ''
    let checkClicked = ''

    if(this.state.selectedType === 'post'){
        tags = this.state['post_tags']
        checkClicked = this.postClicked
    }
    else{
        tags = this.state['issue_tags']
        checkClicked = this.issuesClicked
    }
    return (
    <div>
        <AddItemV 
        formOpen={this.state.formOpen}
        formOpenCB = {this.formOpenCB}
        formCloseCB = {this.formCloseCB}
        formCancelCB = {this.formCancelCB}
        typeChangeCB = {this.typeChangeCB}
        selectedType = {this.state.selectedType}
        tags = {tags}
        checkClicked = {checkClicked}
        setImageForm = {this.setImageForm}
        />
    </div>
    )
  }
}

export default AddItemC