import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WebMidi from '../node_modules/webmidi/webmidi.min.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
console.log(WebMidi);
