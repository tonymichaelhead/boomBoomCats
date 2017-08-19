import React from 'react'
import Auth from '../Auth/Auth.js'
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Room from './Room.jsx'
import Lobby from './Lobby.jsx'
import RouteIndex from './RouteIndex.jsx'
import Profile from './profile.jsx'
import axios from 'axios'
import PublicProfile from './PublicProfile.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.auth = new Auth();
    this.state = {
      user: '',
      picture: '',
      currentFriend: '',
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.changeFriend = this.changeFriend.bind(this);
  }
  componentWillMount() {
    if (!this.auth.isAuthenticated()) {
      this.auth.handleAuthentication((accessToken) => {
        this.auth.getProfile(accessToken, (err, profile) => {
          axios.post('/api/profiles', profile)
            .then((response) => {
              console.log('this finna be response', response)
            })
          this.setState({ user: profile.nickname, picture: profile.picture });
          console.log(`refresh profile in App.jsx ${profile}`)
        })
      });
    } else {
      this.auth.getProfile(localStorage.getItem('access_token'), (err, profile) => {
        axios.post('/api/profiles', profile)
          .then((response) => {
            console.log('this finna be response', response)
          })
        this.setState({ user: profile.nickname, picture: profile.picture });
        this.profileInfo = JSON.stringify(profile);
        console.log(`refresh profile in App.jsx ${JSON.stringify(profile)}`)
      });
    }
  }
  handleLogout() {
    this.auth.logout();
  }

  changeFriend() {
    //write function to handle currentFriend in the state of App.jsx, so 
    //that it can be passed down to Friend to update when link is clicked
  }
  render() {
    return (
      <Router>

        <div>
          <Route exact path='/' render={() => <Lobby logout={this.handleLogout} auth={this.auth} />} />
          <Route path='/room' render={() => <Room logout={this.handleLogout} user={this.state.user} picture={this.state.picture} />} />
          <Route path='/profile' render={() => <Profile user={this.state.user} picture={this.state.picture} changeFriend={this.changeFriend} />} />
          <Route path='/publicprofiles/:username' render={() => <PublicProfile />} />
        </div>

      </Router>
    )
  }
}
