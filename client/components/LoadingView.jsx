import React from 'react';


export default class LoadingView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opponents: []
    }
  }

  componentDidMount() {
    this.props.socket.on('new opponent', function(users) {
      delete users[this.props.socket.id]
      this.setState({
        opponents: Object.values(users)
      })
    }.bind(this))
  }

  render() {
    return (
      <div>
        <h2>Waiting on other players...</h2>
        {/* <div className='row'>
          <div className='col-sm-3'>
            <div className='loader'></div>
          </div>
          <div className='col-sm-3'>
            <div className='loader'></div>
          </div>
          <div className='col-sm-3'>
            <div className='loader'></div>
          </div>
        </div> */}

        {/* {this.state.opponents.map((opponent, i) => 
          (<img src='./assets/grumpyCat.jpg' key={i} />)
        )} */}

        <div className='row'>
          <div className='col-sm-3'>
            {this.state.opponents[0] ? this.state.opponents[0] : <div className='loader'></div>}
          </div>
          <div className='col-sm-3'>
            {this.state.opponents[1] ? this.state.opponents[1] : <div className='loader'></div>}
          </div>
          <div className='col-sm-3'>
            {this.state.opponents[2] ? this.state.opponents[2] : <div className='loader'></div>}
          </div>
        </div>
        
        <img src="https://media.giphy.com/media/xT8qBt2943MLRO8zuM/giphy.gif"></img>
      </div>
    )
  }
};