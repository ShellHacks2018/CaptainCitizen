import React, { Component } from 'react';
import axios from 'axios';

import AddItemV from './AddItemV';

class AddItemC extends Component {
  state = {
    formOpen: false,
    title: '',
    selectedType: 'post',
    image_form: '',
    image_name: '',
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
    },
    currentLocation: {
      lat: '',
      lng: ''
    }
  };

  componentDidMount() {
    this.getCurrentPosition();
  }

  getTags = () => {
    // Used by GetImageC to create the file name
    let tags = [];
    if (this.state.selectedType === 'post') {
      for (var prop in this.state.post_tags) {
        if (this.state.post_tags[prop]) {
          tags.push(prop);
        }
      }
    } else {
      for (var prop in this.state.issue_tags) {
        if (this.state.issue_tags[prop]) {
          tags.push(prop);
        }
      }
    }
    return tags;
  };

  setImageForm = form => {
    this.setState({ image_form: form });
  };

  formOpenCB = () => {
    // Display the form when called by setting state
    this.setState({ formOpen: true });
  };

  getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });
    } else {
      // Browser doesn't support Geolocation
      console.log("Browser doesn't suppport Geolocation");
    }
  };

  setImageName = name => {
    this.setState({ image_name: name });
  };

  formCloseCB = () => {
    // Close the form
    this.setState({ formOpen: false });

    console.log(this.state.currentLocation);
    // post data to MapItems
    let data = {
      image: this.state.image_name,
      title: document.getElementById('titleTF').value,
      tags: this.getTags(),
      type: this.state.selectedType,
      user_item: false,
      created_date: new Date(),
      created_by: localStorage.getItem('user').split('@')[0],
      location: this.state.currentLocation,
      rating: 1
    };

    console.log(data);
    axios
      .post(process.env.REACT_APP_MAP_URL, data)
      .then(res => {})
      .catch(err => {
        console.log(err);
      });

    // Post image to s3
    axios
      .post(process.env.REACT_APP_UPLOAD_URL, this.state.image_form)
      .then(res => {
        console.log(res.body);
      })
      .catch(err => {
        console.log(err);
      });
  };

  formCancelCB = () => {
    // Close the form
    this.setState({ formOpen: false });
  };

  postClicked = name => event => {
    // [name] is called "computed property name"
    // Allows for variablly setting state in a single fuction!
    this.setState({
      ...this.state,
      post_tags: {
        ...this.state.post_tags,
        [name]: event.target.checked
      }
    });
  };

  issuesClicked = name => event => {
    // [name] is called "computed property name"
    // Allows for variablly setting state in a single fuction!
    this.setState({
      ...this.state,
      issue_tags: {
        ...this.state.issue_tags,
        [name]: event.target.checked
      }
    });
  };

  typeChangeCB = event => {
    this.setState({ selectedType: event.target.value });
  };

  render() {
    let tags = '';
    let checkClicked = '';

    if (this.state.selectedType === 'post') {
      tags = this.state['post_tags'];
      checkClicked = this.postClicked;
    } else {
      tags = this.state['issue_tags'];
      checkClicked = this.issuesClicked;
    }
    return (
      <div>
        <AddItemV
          formOpen={this.state.formOpen}
          formOpenCB={this.formOpenCB}
          formCloseCB={this.formCloseCB}
          formCancelCB={this.formCancelCB}
          typeChangeCB={this.typeChangeCB}
          selectedType={this.state.selectedType}
          tags={tags}
          title={this.state.title}
          setImageName={this.setImageName}
          checkClicked={checkClicked}
          setImageForm={this.setImageForm}
        />
      </div>
    );
  }
}

export default AddItemC;
