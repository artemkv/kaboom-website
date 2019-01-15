import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Spinner from "./components/Spinner";
import "./kaboom.css";

// Wait for the google auth2 client to initialize properly
// Google auth2 client uses globals, so we must too
global.kaboom_start = function () {
    ReactDOM.render(<App />, document.getElementById('react_app'));
}

// Render spinner while waiting
ReactDOM.render(<Spinner />, document.getElementById('react_app'));