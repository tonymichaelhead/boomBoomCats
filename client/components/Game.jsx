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
    this.props.socket.on('game start', function(gameState, users, user) {
      this.setState({
        players: gameState.players,
        deck: gameState.deck,
        discard: [],
        turn: [1,2,3,4],
        playerID: users
      })
      console.log('we are in the game component')
      console.log(`Game Component: usersID is ${JSON.stringify(users)}`)
      console.log(`Game Component: userID is ${JSON.stringify(user)}`)
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
    return (

      <div>

        <h3>This is the game window</h3>
        
        <h1 id='poop'></h1>

      </div>

    )
  }
}