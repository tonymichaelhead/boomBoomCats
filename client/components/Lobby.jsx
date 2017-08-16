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
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        console.log('clicked');
        this.props.auth.logout();
    }

    render() {
        return (
            <div className='container'>
                 <div>
                    <div className='row'>
                        <div className='col-sm-6 col-sm-offset-3 text-center'>
                            <h1 className='lobbyText' id='lobbyTitle'>BoomBoom Cats</h1>
                            {!this.props.auth.isAuthenticated() ?
                                <h3 className='lobbyText' onClick={this.props.auth.login}>Please Click to Login & Play</h3>
                                :
                                <div>
                                    <Link to='/room'>
                                        <h3 className='lobbyText'>Click to Enter a Game</h3>
                                    </Link>
                                    <Link to='/'>
                                        <button onClick={this.clickHandler}>logout</button>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lobby;