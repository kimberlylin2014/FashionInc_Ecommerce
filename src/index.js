import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux';
import {store, persistor} from './redux/store'

import {PersistGate} from 'redux-persist/integration/react'

import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


