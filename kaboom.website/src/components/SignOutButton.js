import React from 'react';
import token from '../token';

class SignOutButton extends React.Component {
    signOut(e) {
        e.preventDefault();
        token.removeToken();
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }

    render() {
        return <a href="#" onClick={this.signOut}>Sign out</a>;
    }
}

export default SignOutButton;