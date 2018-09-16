import React, { Component } from 'react'

import AddItemV from './AddItemV'

class AddItemC extends Component {
  state = {
    formOpen: false,
    selectedType: 'post',
    image: '',
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

  getImage = (img) => {
      this.setState({image: img})
  }

  formOpenCB = () => {
    // Display the form when called by setting state
    this.setState({ formOpen: true });
  };

  formCloseCB = () => {
    this.setState({ formOpen: false });
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
        getImage = {this.getImage}
        />
    </div>
    )
  }
}

export default AddItemC