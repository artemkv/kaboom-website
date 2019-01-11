import React from 'react';
import token from '../token';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    render() {
        return (
            <div>
                <div id='google_sign_in'></div>
            </div>
        );
    }

    componentDidMount() {
        gapi.signin2.render('google_sign_in', {
            'scope': 'email profile',
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': this.onSuccess,
            'onfailure': this.onFailure
        });
    }

    onSuccess(googleUser) {
        token.saveToken(googleUser.getAuthResponse().id_token);
        this.props.onLogin();
    }

    onFailure() {
        token.removeToken();
    }
}

export default LoginButton;