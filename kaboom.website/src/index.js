import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Spinner from "./components/Spinner";
import "./kaboom.css";

global.render = function () {
    // Wait for the google auth2 client to initialize properly
    ReactDOM.render(<App />, document.getElementById('react_app'));
}

// Render spinner while waiting
ReactDOM.render(<Spinner />, document.getElementById('react_app'));