import React from 'react'
import Player from './Player.jsx'

export default class Players extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bloop: 'test',
      players: [{},{},{},{}]
    }
  }



  render() {
    return (
      <div>
        Sup I am PLAYERS component
        { this.state.players.map( (player) => <Player player={player} />) }
      </div>
    )
  }
}