import { getRandomColor, logStuff } from '../../helpers';

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
