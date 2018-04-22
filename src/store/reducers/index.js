import { CHANGE_COLOR } from '../actions';

const DEFUALT_STATE = {
  randomColor: 'gray'
};

function rootReducer(state = DEFUALT_STATE, action) {
  console.log('*** REDUCER *** Reducer is calculating a new state...');
  debugger;
  switch (action.type) {
    case CHANGE_COLOR:
      return { ...state, randomColor: action.payload };
    default:
      return { ...state };
  }
}

export default rootReducer;
