import React, { Component } from 'react'

import AddItemV from './AddItemV'

class AddItemC extends Component {
  state = {
    formOpen: false,
    selectedType: '',
    issue: true,
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

  formOpenCB = () => {
    // Display the form when called by setting state
    this.setState({ formOpen: true });
  };

  formCloseCB = () => {
    this.setState({ formOpen: false });
  };

  typeChangeCB = event => {
    this.setState({ selectedType: event.target.value });
    console.log(event.target.value)
  }


//   checkClicked = (name) => event => {
//     // [name] is called "computed property name"
//     // Allows for variablly setting state in a single fuction!
//     this.setState({ ...this.state, 
//                     checkboxes: {
//                       ...this.state.checkboxes,
//                       [name]: event.target.checked }
//                   });
//   };

  render () 
  {
    return (
      <div>
        <AddItemV 
          formOpen={this.state.formOpen}
          formOpenCB = {this.formOpenCB}
          formCloseCB = {this.formCloseCB}
          typeChangeCB = {this.typeChangeCB}
          selectedType = {this.state.selectedType}
          issues_tags = {this.state['post_tags']}
          posts_tags = {this.state['issue_tags']}
          tags = {this.state.post_tags}
        />
      </div>
    )
  }
}

export default AddItemC