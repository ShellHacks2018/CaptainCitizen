import React, { Component } from 'react';
import HomePV from './HomePV';

class LandingPC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <HomePV
        open={this.state.open}
        handleOpenAction={this.handleOpen}
        handleCloseAction={this.handleClose}
      />
    );
  }
}

export default LandingPC;
