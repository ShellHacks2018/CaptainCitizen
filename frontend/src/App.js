import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPC from "./Pages/LandingPC";
import HomePC from "./Pages/HomePC";
import NavBarC from "./Components/nav/NavbarC";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBarC />
          <Switch>
            <Route exact path="/" component={HomePC} />
            <Route path="/home" component={LandingPC} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
