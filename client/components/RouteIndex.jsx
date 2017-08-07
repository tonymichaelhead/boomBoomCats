import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Lobby from './Lobby.jsx'
import Room from './Room.jsx'

export default class RouteIndex extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>

        <div>
          <Route exact path='/' component={Lobby} />
          <Route path='/lobby' component={Lobby} />
          <Route path='/room' component={Room} />
        </div>

      </Router>
    )
  }
}