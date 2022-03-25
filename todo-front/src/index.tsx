import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './shared/context/redux';
import { Auth } from './Auth';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { AlertProvider } from './shared/context/alert.context';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <AlertProvider>
        <BrowserRouter>
            <Auth>
              <App/>
            </Auth>
        </BrowserRouter>
    </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
