import React from 'react';
import LoginControl from './LoginControl';
import CrashList from './CrashList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);

        // This state is about session with our own backend
        this.state = {
            isLoggedIn: false
        };
    }

    onLogin(id_token) {
        console.log("id_token is: [" + id_token + "]");
        this.setState({ isLoggedIn: true }); // TODO: authenticate with backend
    }

    onLogout() {
        this.setState({ isLoggedIn: false }); // TODO: destroy session with backend
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return <div className="client-area-outer">
            <div className="client-area-inner">
                <LoginControl onLogin={this.onLogin} onLogout={this.onLogout} />
                {isLoggedIn && <CrashList />}
            </div>
        </div>
    }
}

export default App;