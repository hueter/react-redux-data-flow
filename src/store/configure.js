import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/**
 * Build a Redux Store and apply middleware
 */
function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      // compose will combine all of our middleware / plugins into one
      applyMiddleware(thunk), // this is how you install thunks
      // enable the dev tools extension if you have it installed
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

export default configureStore;
