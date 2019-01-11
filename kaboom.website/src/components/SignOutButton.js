import React from 'react';

class SignOutButton extends React.Component {
    signOut(e) {
        e.preventDefault();

        sessionStorage.removeItem('kaboom.google_signin.id_token');

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