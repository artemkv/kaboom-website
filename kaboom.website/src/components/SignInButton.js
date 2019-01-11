import React from 'react';

global.googleSignIn_onSignIn = function(googleUser) {
    sessionStorage.setItem('google.id_token', googleUser.getAuthResponse().id_token);
}

class SignInButton extends React.Component {
    render() {
        return <div>
            <div className="g-signin2" data-onsuccess="googleSignIn_onSignIn" data-theme="dark"></div>
        </div>;
    }
}

export default SignInButton;