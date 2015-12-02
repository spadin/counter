import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/index';
import { Provider } from 'react-redux';
import App from './app';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(reducer);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});

