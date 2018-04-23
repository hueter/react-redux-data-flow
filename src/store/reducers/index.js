import { logStuff } from '../../helpers';
import { CHANGE_COLOR } from '../actions';

const DEFUALT_STATE = {
  randomColor: 'gray'
};

function rootReducer(state = DEFUALT_STATE, action) {
  logStuff('Reducer Invoked', '#6A1B9A', [
    'Current State',
    state,
    'Action',
    action
  ]);
  // debugger;

  switch (action.type) {
    case CHANGE_COLOR:
      return { ...state, randomColor: action.payload };
    default:
      return { ...state };
  }
}

export default rootReducer;
