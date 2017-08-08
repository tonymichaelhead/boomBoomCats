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
        <div className='row'>
          <div className='col-sm-8'>
            <h3 className='text-center'>Waiting on other players...</h3>
          </div>
        </div>
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
          <div className='col-sm-2 col-sm-offset-1'>
            {this.state.opponents[0] ? <p className='text-center loadedOpp'>{this.state.opponents[0]}</p> : <div className='loader'></div>}
          </div>
          <div className='col-sm-2'>
            {this.state.opponents[1] ? <p className='text-center loadedOpp'>{this.state.opponents[1]}</p> : <div className='loader'></div>}
          </div>
          <div className='col-sm-2'>
            {this.state.opponents[2] ? <p className='text-center loadedOpp'>{this.state.opponents[2]}</p> : <div className='loader'></div>}
          </div>
        </div>
        
        <div className='row'>
          <div className='col-sm-4'>
            <img id='loadingScreenGif' src="https://media.giphy.com/media/xT8qBt2943MLRO8zuM/giphy.gif" />
          </div>
        </div>

      </div>
    )
  }
};