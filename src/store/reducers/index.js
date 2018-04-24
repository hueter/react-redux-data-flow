import { logStuff } from '../../helpers';
import {
  CHANGE_COLOR,
  FETCH_RANDOM_GIF_REQUEST,
  FETCH_RANDOM_GIF_SUCCESS,
  FETCH_RANDOM_GIF_FAIL
} from '../actions';

/**
 * The default argument to the reducer that will be used on
 *  the initial call (with the @@INIT action type).
 *  State is almost always modeled as an object, due to
 *  the inherent flexibility and so that we can add new keys whenever we want.
 */
const DEFUALT_STATE = {
  color: 'gray',
  imageURL: 'https://media.giphy.com/media/2vogqNpFQywWC0z0j5/giphy.gif'
};

/**
 * A Reducer should NEVER be invoked manually since that will interfere with
 *  Redux internal workings. This is what 'dispatch()' is for.
 *
 *  Reducers usually use switch statements to handle different cases.
 *
 *  Reducers should not have to do a lot of complicated processing or logic. Their
 *  only purpose is to calculate a new 'state' object.
 *
 * Reducers MUST be a pure function (no modifications to the inputs).
 *
 * @param {Object} state - current state from the store
 * @param {Object} action - an object describing how to update the state
 */
function rootReducer(state = DEFUALT_STATE, action) {
  // for logging purposes only, ignore
  logStuff('Reducer Invoked', '#6A1B9A', [
    'Current State',
    state,
    'Action',
    action
  ]);
  // debugger;

  switch (action.type) {
    case CHANGE_COLOR:
      /*
       when spreading an object, always apply the updated keys after the original ...state
        so the old values get overwritten by the new values
      */
      return { ...state, color: action.payload };
    case FETCH_RANDOM_GIF_SUCCESS:
      return { ...state, imageURL: action.payload };
    // TODO implement handling for these
    case FETCH_RANDOM_GIF_REQUEST:
    case FETCH_RANDOM_GIF_FAIL:
    default:
      return { ...state };
  }
}

export default rootReducer;
