import React from 'react';
import LoginControl from './LoginControl';
import CrashList from './CrashList';
import Spinner from './Spinner';
import * as api from '../api';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);

        // This state is about session with our own backend
        this.state = {
            pendingLogin: false,
            error: null,
            isLoggedIn: false,
            userInfo: null
        };
    }

    onLogin(id_token) {
        console.log("id_token: [" + id_token + "]");

        this.setState({ pendingLogin: true });
        api.login(id_token)
            .then(userInfo => {
                this.setState({
                    pendingLogin: false,
                    isLoggedIn: true,
                    userInfo,
                    error: null
                });
            })
            .catch(error => {
                this.setState({
                    pendingLogin: false,
                    isLoggedIn: false,
                    userInfo: null,
                    error
                });
            });
    }

    onLogout() {
        api.logout()
            .then(() => {
                this.setState({
                    isLoggedIn: false,
                    userInfo: null,
                    error: null
                });
            })
            .catch(error => {
                this.setState({
                    isLoggedIn: false,
                    userInfo: null,
                    error
                });
            });
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        let pendingLogin = this.state.pendingLogin;
        let appCode = '';
        if (isLoggedIn) {
            appCode = this.state.userInfo.defaultAppCode;
        }
        return <div className="client-area-outer">
            <div className="client-area-inner">
                <LoginControl onLogin={this.onLogin} onLogout={this.onLogout} />
                {pendingLogin && <Spinner />}
                {isLoggedIn && <div className="appcode">App Code: {appCode}</div>}
                {isLoggedIn && <CrashList appCode={appCode} />}
            </div>
        </div>
    }
}

export default App;