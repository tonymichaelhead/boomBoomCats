import React, { Component } from 'react';

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlayerTurn: this.props.isPlayerTurn
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   // console.log('these are the "nextProps"', JSON.stringify(nextProps))
  //   if (this.state.isPlayerTurn !== nextProps.isPlayerTurn) {
  //     this.setState({isPlayerTurn: nextProps.isPlayerTurn})
  //   }
  // }

  render() {
    return (
      <div className='col-xs-4 col-xs-offset-1 deck-wrapper'>
        { this.props.isPlayerTurn ?
          <img className="deck img-rounded" 
            onClick={this.props.handleDeckClick} 
            src={'./assets/cardBack.jpg'} /> : 
          <img className="deck img-rounded"  
            src={'./assets/cardBack.jpg'} /> 
        }
        <h2 id='deckCount'>{this.props.deck.length}</h2>
      </div>
    );
  }
}

export default Deck;