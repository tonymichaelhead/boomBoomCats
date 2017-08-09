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
  }

  componentWillReceiveProps(nextProps) {
    console.log('HERE ARE THE NEXT PROPS GUYS :::::: ', nextProps)
    this.setState({
      hand: nextProps.player.hand
    })
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
