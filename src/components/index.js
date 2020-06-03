import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Rout } from 'react-router-dom';
import App from './app';

ReactDOM.render(
  <Rout>
    <App />
  </Rout>,
  document.getElementById('root')
);
