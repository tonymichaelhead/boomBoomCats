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
      user: ''
    }
  }
  componentWillMount() {
    if(!this.auth.isAuthenticated()){
      this.auth.handleAuthentication((accessToken)=>{
        this.auth.getProfile(accessToken, (err,profile)=>{
          this.setState({user: profile.nickname});
          console.log(`profile in App.jsx ${profile}`)
        })
      });
    } else {
      this.auth.getProfile(localStorage.getItem('access_token'), (err,profile)=>{
        this.setState({user:profile.nickname});
        console.log(`profile in App.jsx ${JSON.stringify(profile)}`)
      });
    }
  }
  render() {
    return(
      <Router>

        <div>
          <Route exact path='/' render={() =><Lobby auth={this.auth}/>} />
          <Route path='/room' render={() => <Room user={this.state.user}/>} />
        </div>

      </Router>
    )
  }
}
