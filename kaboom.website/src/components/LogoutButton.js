import React from 'react';

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
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            this.props.onLogout();
        });
    }
}

export default LogoutButton;