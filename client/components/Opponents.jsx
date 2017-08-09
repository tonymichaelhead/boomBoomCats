import React from 'react'
import Game from './Game.jsx'

export default class Opponents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const opponentsUsernames = this.props.opponentsUsernames //should be an array of id's
    const opponents = this.props.opponents
    console.log('these are the props of the oppenent component:', this.props)
    console.log('the opponents are...', opponents)

    return (
      <div className="row">
        { 
          opponents.map((opp, i) => {
            console.log('these are the opponents usernames on the opponent component', opponentsUsernames)
            return (
              <span className="opponent col-xs-4"/*opponent={opponentsUsernames[i]} name={opponentsUsernames[i]}*/>
                <h4>Player:</h4>
                <h3 className='oppName text-center'>{opponentsUsernames[i]}</h3>
                {
                  opp.hand.map(card => (<div className="col-xs-1"><img src={'./assets/cardBack.jpg'} className='card-back img-rounded' /></div> ))
                }
              </span>
            )
          })
        }     
      </div>
    )
  }
}
