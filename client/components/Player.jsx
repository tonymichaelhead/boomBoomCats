import React from 'react'
import Game from './Game.jsx'
import Hand from './Hand.jsx'


export default class Player extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hand: []
    }
    
  }
  
  componentDidMount() {
    this.setState({hand: this.props.player.hand})
  }


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
