import React from 'react';
import Friend from './Friend.jsx';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    { this.props.friends.map(friend => <Friend friend={friend}/>) }
                </ul>
            </div>
        );
    }
}

export default FriendsList;