import React, { Component } from 'react'
import LandingPV from './LandingPV'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

import authA from '../Redux/Actions/authA';

class LandingPC extends Component {

  updateEmail = event => {
    this.props.updateEmail(event.target.value)
  }
  updatePassword = event => {
    this.props.updatePassword(event.target.value)
  }

  signInSubmit = () => {
    let data = {
      'email': this.props.email,
      'password': this.props.password
    }
    this.props.authFn.login(data);
  }

  createSubmit = () => {
    let data = {
      'username': this.props.email,
      'email': this.props.email,
      'password': this.props.password
    }
    this.props.authFn.register(data);
  }

  render () {
    if(this.props.auth){
      return <Redirect to="/home" />
    }
    else{
      return (
        <LandingPV
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          signInSubmit={this.signInSubmit}
          createSubmit={this.createSubmit} />
      )
      }
  }
}

const landingPageState = state => {
  return {
    email: state.LoginPageR.email,
    password: state.LoginPageR.password,
    auth: state.authR.auth
  }
}

const landingPageAction = dispatch => {
  return {
    updateEmail: (val) => { dispatch({type: 'GET_EMAIL', val: val}) },
    updatePassword: (val) => { dispatch({type: 'GET_PASSWORD', val: val}) },
    authFn: authA(dispatch)
  }
}

export default connect(landingPageState, landingPageAction)(LandingPC)
