import React, {Component} from 'react';
import NavbarV from './NavbarV';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthA from './../../Redux/Actions/authA'

class NavbarComponent extends Component {
  render() {
    if(this.props.auth){
      return(<NavbarV currentAuth={this.props.auth} logoff={this.props.authFn.logout}/>);
    }
    else{
      return(<NavbarV currentAuth={this.props.auth}/>);
    }
  }
}

NavbarComponent.propTypes = {
  currentAuth: PropTypes.bool, // redux managed state.auth
  authUpdate: PropTypes.func   // dispatch function to update state.auth
};

const mapStateToProps = (state) => { 
  return {
    auth: state.authR.auth
  } 
}
const mapDispatchToProps = (dispatch) => { 
  return { 
    authFn: AuthA(dispatch)
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)