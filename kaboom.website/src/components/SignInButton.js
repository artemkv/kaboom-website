import React from 'react';
import token from '../token';

class SignInButton extends React.Component {
    render() {
        return <div>
            <div id='google_sign_in'></div>
        </div>;
    }

    componentDidMount() {
        gapi.signin2.render('google_sign_in', {
            'scope': 'email',
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': this.onSuccess,
            'onfailure': this.onFailure
        });
    }

    onSuccess(googleUser) {
        token.saveToken(googleUser.getAuthResponse().id_token);
    }
    onFailure() {
        token.removeToken();
    }
}

export default SignInButton;