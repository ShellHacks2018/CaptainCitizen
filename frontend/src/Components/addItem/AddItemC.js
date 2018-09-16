import React, { Component } from 'react'
import {upload_url} from '../../config.js'
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

  getImageForm = (img) => {
      this.setState({image_form: img})
  }

  formOpenCB = () => {
    // Display the form when called by setting state
    this.setState({ formOpen: true });
  };

  formCloseCB = () => {
    this.setState({ formOpen: false });

    axios.post(upload_url, this.state.image_form).then((res)=>{
      console.log(res.body)
    }).catch((err)=>{console.log(err)})
  };

  typeChangeCB = event => {
    this.setState({ selectedType: event.target.value });
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
        typeChangeCB = {this.typeChangeCB}
        selectedType = {this.state.selectedType}
        tags = {tags}
        checkClicked = {checkClicked}
        getImageForm = {this.getImageForm}
        />
    </div>
    )
  }
}

export default AddItemC