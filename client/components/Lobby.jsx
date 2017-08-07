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
        this.auth = new Auth();
        this.state = {
            meep: 'whooosh'
        }
    }
    render() {
        return (
            <div>
                {!this.auth.isAuthenticated() ?
                <button onClick={this.auth.login}>Please Login to Play</button>
                :
                <Link to='/room'>
                <h1>Click here to join game</h1>
                </Link>
                }
            </div>
        );
    }
}

export default Lobby;