import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.state = {
            isLoggedIn: false
        };
    }

    onLogin() {
        this.setState({ isLoggedIn: true });
    }

    onLogout() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onLogout={this.onLogout} />;
        } else {
            button = <LoginButton onLogin={this.onLogin} />;
        }
        return button;
    }
}

export default LoginControl;