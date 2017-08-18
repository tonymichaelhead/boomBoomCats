import React from 'react';
import { Link } from 'react-router-dom';
import publicProfile from './publicProfile.jsx'

class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li>
                <Link to='/publicprofiles' >{ this.props.friend.profilePicUrl } { this.props.friend.username }</Link>
                </li>
            </div>
        );
    }
}

export default Friend;