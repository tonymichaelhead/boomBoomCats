import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App.jsx'
import Room from './Room.jsx'

export default class RouteIndex extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>

        <div>
          <Route exact path='/' component={App} />
          <Route path='/room' component={Room} />
        </div>

      </Router>
    )
  }
}