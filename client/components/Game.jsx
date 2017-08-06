import React from 'react'
import io from 'socket.io-client'

export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [],
      deck: [],
      discard: [],
      turn: [],
      playerID: null
    }
  }

  componentDidMount() {
    this.props.socket.on('game start', function(gameState, user) {
      this.setState({
        players: gameState.players,
        deck: gameState.deck,
        discard: [],
        turn: [1,2,3,4],
        playerID: user
      })
      console.log(`userID is ${JSON.stringify(user)}`)
    }.bind(this))

  }

  render() {
    return (

      <div>

        <h3>This is the game window</h3>
        
        <h1 id='poop'></h1>

      </div>

    )
  }
}