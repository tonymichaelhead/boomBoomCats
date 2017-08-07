import React from 'react'
import Game from './Game.jsx'

class Opponents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const opponents = this.props.opponents //should be an array of id's
    return (
      <div>
        { 
          opponents.map((opp, i) => {
            return (
              <div opponent={opponents[i]} name={opponents[i].name}>
                <h2>Player: {opponents[i].name}</h2>
                {
                  opponents[i].hand.map( card => (
                    <div className="cardBack"></div>
                  ))
                }
              </div>
            )
          })
        }     
      </div>
    )
  }
};

export default Opponents