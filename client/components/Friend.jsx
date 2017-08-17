import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li>
                <a href={`/users/{this.props.friend.username}`}>{ this.props.friend.profilePicUrl } { this.props.friend.username }</a>
                </li>
            </div>
        );
    }
}

export default Friend;