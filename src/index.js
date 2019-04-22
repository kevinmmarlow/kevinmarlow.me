import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import App from './pages/App';

const disableReactDevToolsInProd = () => {
  const isProd = process.env.NODE_ENV === 'production' || !window.location.port;

  // disable react-dev-tools for this project
  if (isProd && typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
    for (let [key, value] of Object.entries(
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__
    )) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
        typeof value == 'function' ? () => {} : null;
    }
  }
};

disableReactDevToolsInProd();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
