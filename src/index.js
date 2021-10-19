import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

atatus.config('6b9562243cbc452d8d41b74e89470d17').install();
console.log('Has reached here');
atatus.notify(new Error('Test Atatus Setup'));
