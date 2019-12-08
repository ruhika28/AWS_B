import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import * as serviceWorker from './serviceWorker';
Amplify.configure(config);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
ReactDOM.render(<App />, document.getElementById('root'));
