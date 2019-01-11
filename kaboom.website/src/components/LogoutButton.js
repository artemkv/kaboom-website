import React from 'react';
import token from '../token';

class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
        this.signout = this.signout.bind(this);
    }

    render() {
        return <a href="#" onClick={this.signout}>Sign out</a>;
    }

    signout(e) {
        e.preventDefault();
        token.removeToken();
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            this.props.onLogout();
        });
    }
}

export default LogoutButton;