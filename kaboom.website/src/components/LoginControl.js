import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);

        // This state is about session with Google OpenID
        this.state = {
            // First time page load gapi.auth2 is not yet initialized 
            // and isSignedIn.get() is going to return false anyway
            isLoggedIn: false
        };        
    }

    isAuthenticated() {
        return gapi.auth2.getAuthInstance().isSignedIn.get();
    }
    
    onLogin(id_token) {
        this.setState({ isLoggedIn: this.isAuthenticated() });
        this.props.onLogin(id_token);
    }

    onLogout() {
        this.setState({ isLoggedIn: this.isAuthenticated() });
        this.props.onLogout();
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