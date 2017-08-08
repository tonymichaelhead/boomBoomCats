import React, { Component } from 'react';
import Auth from '../Auth/Auth.js';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Lobby extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container'>
                {!this.props.auth.isAuthenticated() ?
                <button onClick={this.props.auth.login}>Please Login to Play</button>
                :
                <div>
                    <div className='row'>
                        <div className='col-sm-6 col-sm-offset-3 text-center'>
                            <h1 className='lobbyText' id='lobbyTitle'>BoomBoom Cats</h1>
                            <Link to='/room'>
                                <h3 className='lobbyText'>Click to Enter a Game</h3>
                            </Link>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-6 col-sm-offset-3 text-center'>
                            {/* <Link to='/room'>
                                {<img id='dynaKitten' src='./assets/dynamiteKitten.jpg' />}
                            </Link> */}
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Lobby;