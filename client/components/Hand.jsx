import React from 'react'
import Card from './Card.jsx'


export default class Hand extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('these are the props of the hand component', this.props)
    console.log('this is the first card in the hand', this.props.cards[0])
    return (
      <div className="hand row">
         { this.props.cards.map((card, i) => (
          <Card name={card.name}
            image={card.image} 
            description={card.description} 
            index={i}
            handleCardClick={this.props.handleCardClick}
            isPlayerTurn={this.props.isPlayerTurn}
          />
          ))}
      </div>
    )
  }
}