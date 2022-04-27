import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as Redux } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

import {store , persistor } from './redux/store';

import App from './App';
import './index.css';

ReactDOM.render(
  <Redux store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </PersistGate>
    </Router> 
  </Redux>,
  document.getElementById('root')
);