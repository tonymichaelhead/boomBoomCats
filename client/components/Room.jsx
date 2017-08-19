import React from 'react'
import Chat from './Chat.jsx'
import Game from './Game.jsx'
import Profile from './profile.jsx'
import { Link } from 'react-router-dom';
import io from 'socket.io-client'
import Auth from '../Auth/Auth.js';
import PublicProfile from './PublicProfile.jsx'


export default class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      picture: this.props.picture,
      socket: io()
    }
  }

  componentDidMount() {
    this.state.socket.emit('addUser', this.state.user)
    console.log(this.state.user, this.props.picture)
  }

  componentWillUnmount() {
    this.state.socket.emit('disconnect')
  }

  render() {
    return (

      <div className='container'>

        <div className='row'>
          <div className='col-sm-9'>
            <Game socket={this.state.socket} user={this.state.user} />
          </div>

          <div className='col-sm-2 col-sm-offset-1'>
            <Chat socket={this.state.socket} />
          </div>

          <Link to = '/'><button onClick={this.props.logout}>Logout</button></Link>

          <Link to = '/profile'  ><button onClick={()=>this.state.socket.emit('removeUser')}> View your Profile </button></Link>
        </div>

      </div>

    )
  }
}