import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// build the store and apply any middleware
const store = configureStore();

// Render the app with Redux enabled
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
