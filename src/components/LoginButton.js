import React from 'react';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    render() {
        return (
            <div id='login_button'>
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
            'onfailure': this.onError
        });
    }

    onSuccess(googleUser) {
        this.props.onLogin(googleUser.getAuthResponse().id_token);
    }

    onError() {
        // Ignore
    }
}

export default LoginButton;