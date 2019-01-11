import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./kaboom.css";

global.render = function () {
    ReactDOM.render(<App />, document.getElementById('react_app'));
}