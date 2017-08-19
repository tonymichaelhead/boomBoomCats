import React from 'react';
import Friend from './Friend.jsx';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('FriendsList props: ',this.props)
        return (
            <div id="friends">
                <h3>Friends</h3>
                <ul id="friend-items">
                    { this.props.friends.map(friend => <Friend changeFriend={this.props.changeFriend} friend={friend}/>) }
                </ul>
            </div>
        );
    }
}

export default FriendsList;