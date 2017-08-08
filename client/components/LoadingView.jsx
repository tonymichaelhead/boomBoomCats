import React from 'react';


export default class LoadingView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opponents: []
    }
  }

  componentDidUpdate(opponentsUsernames, opponents) {
    console.log('component updated.... ', this.props.opponentsUsernames)
    this.setState({
      opponents: this.props.opponentsUsernames
    })
  }

  render() {
    return (
      <div>
        <h2>Waiting on other players...</h2>

        {this.props.opponentsUsernames.map((opponent, i) => 
          (<img src='./assets/grumpyCat.jpg' key={i} />)
        )}
        
        <img src="https://media.giphy.com/media/xT8qBt2943MLRO8zuM/giphy.gif"></img>
      </div>
    )
  }
};