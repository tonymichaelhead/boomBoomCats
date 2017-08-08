import React from 'react'

export default class Hand extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    if (this.props.isPlayerTurn) {
      
    }
  }

  render() {
    return (
      <div className="hand row row-center">
         {this.props.cards.map(card => (
           <span className="card col-xs-2 thumbnail">
             <div>{card.name}</div>
             <img className="img-rounded thumbnail" src={card.image}></img>
             <div>{card.description}</div>
           </span>
         )
         )}
      </div>
    )
  }
}