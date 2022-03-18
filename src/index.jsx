import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as Redux } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOM.render(
  <Redux store={store}>
    <Router>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Router> 
  </Redux>,
  document.getElementById('root')
);