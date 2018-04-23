import { createStore } from 'redux';
import rootReducer from './reducers';

/**
 * Build a Redux Store and apply middleware
 */
function configureStore() {
  const store = createStore(
    rootReducer,
    // enable the dev tools extension if you have it installed
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  return store;
}

export default configureStore;
