import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPC from './Pages/LandingPC'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={LandingPC} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
