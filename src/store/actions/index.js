import { getRandomColor, logStuff } from '../../helpers';
import { fetchRandomGif } from '../../services/api';
/**
 * constant variables like this are designed to guard
 *  against typos. You will get a ReferenceError or ImportError instead of a
 *  silent failure if you spell the name of the variable wrong, which is
 *  why it is preferable over a string literal.
 *
 * In larger projects, you might have an actions/constants.js file which
 *  declares every possible action to be used by the action creators or reducer.
 */
export const CHANGE_COLOR = 'CHANGE_COLOR';

export const FETCH_RANDOM_GIF_REQUEST = 'FETCH_RANDOM_GIF_REQUEST';
export const FETCH_RANDOM_GIF_SUCCESS = 'FETCH_RANDOM_GIF_SUCCESS';
export const FETCH_RANDOM_GIF_FAIL = 'FETCH_RANDOM_GIF_FAIL';

export function changeColor() {
  /**
   * Helper function! Remember it is best to abstract more
   *  complicated processing into separate functions (and files)
   *  both for code organization and unit test-ability.
   */
  const randomColor = getRandomColor();

  logStuff(
    'Action Dispatched',
    '#c62828',
    ['Action', { type: CHANGE_COLOR, payload: randomColor }],
    true
  );
  // debugger;

  /**
   * All Action Creators should return an Action, which is plain JS object.
   * Most action creators are in this format:
   * { type: UPPER_SNAKE_CASE_THING, payload: whateverYouWant }
   * The 'type' key is standard practice and should be included on 100% of your actions.
   *  'payload' can be called whatever you want or omitted entirely if not required.
   *   Many actions do not required a payload; for instance, FETCH_USERS is simply an API
   *   request action that needs no payload.
   */
  //
  return {
    type: CHANGE_COLOR,
    payload: randomColor
  };
}

/**
 * A thunk!
 *  This action creator responds with an async function
 *  which makes an API request and dispatches another
 *  action by calling the success or fail action creators.
 */
export function fetchRandomGifRequest() {
  logStuff(
    'THUNK Dispatched',
    '#c62828',
    ['Action', { type: FETCH_RANDOM_GIF_REQUEST }],
    true
  );
  // debugger;

  // this is the thunk part
  return async dispatch => {
    // let's send an action to describe what we're doing
    dispatch({ type: FETCH_RANDOM_GIF_REQUEST });
    try {
      // make an async API call
      const newGif = await fetchRandomGif();
      // dispatch a success action with payload from the API call
      dispatch(fetchRandomGifSuccess(newGif));
    } catch (err) {
      // dispatch a failure action with error from the call
      dispatch(fetchRandomGifFail(err));
      // have to manually reject in an async function
      return Promise.reject();
    }
  };
}

function fetchRandomGifSuccess(gif) {
  return {
    type: FETCH_RANDOM_GIF_SUCCESS,
    payload: gif
  };
}

function fetchRandomGifFail(err) {
  return {
    type: FETCH_RANDOM_GIF_FAIL,
    payload: err
  };
}
