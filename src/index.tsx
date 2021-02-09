import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.root'),
);

reportWebVitals();