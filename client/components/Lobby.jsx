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
                 <div>
                    <div className='row'>
                        <div className='col-sm-6 col-sm-offset-3 text-center'>
                            <h1 className='lobbyText' id='lobbyTitle'>BoomBoom Cats</h1>
                            <h3 className='lobbyText' onClick={this.props.auth.login}>Please Click to Login & Play</h3>
                        </div>
                    </div>
                </div>
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
                </div>
                }
            </div>
        );
    }
}

export default Lobby;