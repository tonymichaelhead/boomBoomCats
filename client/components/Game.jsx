import React from 'react'
import io from 'socket.io-client'
import Opponents from './Opponents.jsx'
import Player from './Player.jsx'
import LoadingView from './LoadingView.jsx'
import InitializedView from './InitializedView.jsx'

export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allPlayersId: [],
      playerId: '',
      allPlayers: [],
      playerIndex: null,
      deck: [],
      discard: [],
      turn: []
    }
  }

  componentDidMount() {
    this.props.socket.on('game start', function(gameState, users) {
      let usersId = Object.values(users)
      let user = users[this.props.socket.id]
      // console.log(`socket id is ${this.props.socket.id}`)
      // console.log(`users is ${JSON.stringify(users)}`)
      this.setState({
        allPlayersId: usersId, // array
        playerId: user, //string
        allPlayers: gameState.allPlayers, // array with objects with hand
        playerIndex: usersId.findIndex( (e) => e === user), //string
        deck: gameState.deck, //array of card objects
        discard: [],
        turn: [0,1,2,3]
      })
      // console.log('we are in the game component')
      // console.log(`Game Component: usersID is ${JSON.stringify(Object.values(users))}`)
      // console.log(`Game Component: userID is ${JSON.stringify(user)}`)
    }.bind(this))

  }

  drawACard() {

  }


  endTurn() {
  }


  skipATurn() {

  }

  attackNextPlayer() {
  }

  shuffleDeck() {
    let unshuffledDeck = this.state.deck.slice()
    let shuffledDeck = []

    while (unshuffledDeck.length > 0) {
      let min = 0
      let max = unshuffledDeck.length - 1
      let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min
      shuffledDeck.push(unshuffledDeck[randomIndex])
      unshuffledDeck.splice(randomIndex, 1)
    }

    this.setState({ deck: shuffledDeck })
  }


  seeTheFuture() {
    let firstThreeCards = this.state.deck.slice(0,3)
    return firstThreeCards
  }


  render() {
    let tempOpponents = this.state.allPlayers.slice()
    tempOpponents.splice(this.state.playerIndex,1)
    let opponents = tempOpponents

    let tempOpponentUsernames = this.state.allPlayersId.slice()
    console.log('ALL PLAYERS ID ::: ', this.state.allPlayersId)
    tempOpponentUsernames.splice(this.state.playerIndex,1)
    let opponentsUsernames = tempOpponentUsernames
    
    let player = this.state.allPlayers[this.state.playerIndex]
    let isPlayerTurn
    this.state.turn[0] === this.state.playerIndex ? isPlayerTurn = true: isPlayerTurn = false
    
    return (

      <div>
        <h3>This is the game window</h3>
        {console.log(`this.state is ${JSON.stringify(this.state)}`)}
        {console.log(`
          opponentsUsernames are ${JSON.stringify(opponentsUsernames)}
          playerIndex is ${this.state.playerIndex} and player is ${JSON.stringify(player)}
          is it player's turn? ${isPlayerTurn}
        `)}
        { this.state.allPlayers.length === 4 ? 
          <InitializedView 
            deck={this.state.deck}
            discard={this.state.discard}
            player={player} 
            opponents={opponents} 
            opponentsUsernames={opponentsUsernames} /> : 
          <LoadingView socket={this.props.socket} /> }
      </div>

    )
  }
}