import React from 'react'
import Game from './Game.jsx'
import Hand from './Hand.jsx'


export default class Player extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hand: this.props.player.hand
    }
    
  }

  componentDidMount() {
    this.setState({hand: this.props.player.hand})

    this.props.socket.on('update deck', function(newDeck, newHand) {
      this.setState({
        hand: this.props.player.hand
      })
    }.bind(this))
  }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.player.hand.length !== this.state.hand.length) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }


  render() {
    return (
      <div className="player row">
        Player
        <Hand 
          isPlayerTurn={this.props.isPlayerTurn} 
          cards={this.state.hand}
          handleCardClick={this.props.handleCardClick}/>
      </div> 
    )
  }
}
