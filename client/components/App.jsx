import React from 'react'
import Auth from '../Auth/Auth.js'
import {
  Route, 
  BrowserRouter as Router
} from 'react-router-dom'
import Room from './Room.jsx'
import Lobby from './Lobby.jsx'
import RouteIndex from './RouteIndex.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.auth = new Auth();
    this.state = {
      profile: ''
    }
  }
  componentWillMount() {
      this.auth.handleAuthentication(()=>this.setState({profile: 'morp'}));
  }
  render() {
    return(
      <Router>

        <div>
          <Route exact path='/' render={() =><Lobby auth={this.auth}/>} />
          <Route path='/room' render={() => <Room/>} />
        </div>

      </Router>
    )
  }
}
