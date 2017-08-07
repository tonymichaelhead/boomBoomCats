import React from 'react'

export default class Hand extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      whee: 'test'
    }
  }

  handleClick() {
    if (this.props.isPlayerTurn) {
      
    }
  }

  render() {
    return (
      <div className="hand">
         {this.props.cards.map(card => (
           <div className="card">{card}</div>
         )
         )}
        Sup I am HAND component
      </div>
    )
  }
}