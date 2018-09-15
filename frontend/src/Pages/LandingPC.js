import React, { Component } from 'react'
import LandingPV from './LandingPV'
import {connect} from 'react-redux'

import {updateUsername, updatePassword} from '../Redux/Actions/LogInAction'

class LandingPC extends Component {

  updateUsername = event => {
    this.props.updateUsername(event.target.value)
  }
  updatePassword = event => {
    this.props.updatePassword(event.target.value)
  }


  render () {
    return (
      <div>
        <LandingPV
          updateUsername={this.updateUsername}
          updatePassword={this.updatePassword} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.LoginPageR.username,
    password: state.LoginPageR.password,
    authenticated: state.LoginPageR.authenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUsername: (val) => dispatch(updateUsername(val)),
    updatePassword: (val) => dispatch(updatePassword(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPC)
