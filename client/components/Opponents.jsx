import React from 'react';

const Opponents = (props) => {
  const opponents = props.opponents //should be an array of id's
  return (
    <div>
      { 
        opponents.map((opp, i) => {
          return (
            <div opponent={opponents[i]}>
              {
                opponents[i].hand.map( card => {
                  return <div className="cardBack"></div>
                })
              }
            </div>
          )
        })
      }     
    </div>
  );
};

export default Opponents;