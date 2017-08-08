import React from 'react'
import Game from './Game.jsx'

export default class Opponents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const opponentsUsernames = this.props.opponentsUsernames //should be an array of id's
    const opponents = this.props.opponents
    console.log('the opponents are...line 12 opponents', opponents)

    return (
      <div>
        { 
          opponents.map((opp, i) => {
            return (
              <div opponent={opponentsUsernames[i]} name={opponentsUsernames[i]}>
                <h2>Player: {opponentsUsernames[i]}</h2>
                {
                  opp.hand.map( card => (<div className="cardBack">{card.name}-{card.description}</div> ))
                }
              </div>
            )
          })
        }     
      </div>
    )
  }
}
