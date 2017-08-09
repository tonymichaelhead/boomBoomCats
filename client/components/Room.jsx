import React from 'react'
import Chat from './Chat.jsx'
import Game from './Game.jsx'
import io from 'socket.io-client'


export default class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      socket: io()
    }
  }

  componentDidMount() {
    this.state.socket.emit('addUser', this.state.user)
  }

  render() {
    return (

      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-sm-offset-3 text-center'>
            <h1>BoomBoom Cats</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-9'>
            <Game socket={this.state.socket} user={this.state.user} />
          </div>

          <div className='col-sm-2 col-sm-offset-1'>
            <Chat socket={this.state.socket} />
          </div>
        </div>

      </div>

    )
  }
}