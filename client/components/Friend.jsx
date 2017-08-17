import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li>
                { this.props.friend.profilePicUrl } { this.props.friend.username }
                </li>
            </div>
        );
    }
}

export default Friend;