import { createStore } from 'redux';
import rootReducer from './reducers';

function configureStore() {
  const store = createStore(
    rootReducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  return store;
}

export default configureStore;
