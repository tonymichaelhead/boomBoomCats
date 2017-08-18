import React from 'react';
import Friend from './Friend.jsx';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="friends">
                <h3>Friends</h3>
                <p className="friendfont">
                    { this.props.friends.map(friend => <Friend friend={friend}/>) }
                </p>
            </div>
        );
    }
}

export default FriendsList;