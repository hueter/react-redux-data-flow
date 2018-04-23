import { changeColor } from '../store/actions';
import { logStuff } from '../helpers';
import { connect } from 'react-redux';
import ColorBox from '../components/ColorBox';

/**
 * This allows our component to subscribe to Redux state changes. The component
 *  will update itself (re-render) based on a shallow equality comparison.
 *
 * For more information: https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 * @param {Object} reduxState - Redux State from the store
 * @param {Object} ownProps - props passed to the connected component
 */
function mapStateToProps(reduxState, ownProps) {
  logStuff('Container Mapped Redux State to Component Props', '#37474F', [
    'Redux State',
    reduxState
  ]);
  // debugger;

  return {
    color: reduxState.color
  };
}

/**
 * This function maps different action dispatchers to React component props.
 *  Action Creators get resolved to action objects, which are then dispatched
 *  to the reducer. Essentially the reducer is called like:  reducer(currentState, newAction)
 *  under the hood whenever we use "dispatch".
 *
 *  This function only runs once, when the container loads.
 *
 * For more information: https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 * @param {Function} dispatch - passed every time automatically
 * @param {Object} ownProps - whatever props passed to the connected component
 */
function mapDispatchToProps(dispatch, ownProps) {
  logStuff('Container Mapped Dispatch Functions to Component Props', '#37474F');
  // debugger;

  return {
    /* 
       we return an object, with functions for keys
       the functions call dispatch with an action
       changeColor is an action creator that resolves to an action (object)
       You may use the built-in redux helper: bindActionCreators()
        https://redux.js.org/api-reference/bindactioncreators
    */
    changeColor: () => dispatch(changeColor())
  };
}

/**
 * The connect() method lets your component subscribe to Redux state.
 *  It does not modify the original component. Instead, it creates a new
 *  component that is enhanced with the Redux connection. In this way,
 *  we're building a Higher Order Component.
 *
 * The weird syntax of back-to-back parentheses is called 'function composition'.
 *  It's a super common practice in the style of functional programming.
 *  Basically the connect function resolves to a function, that you can then
 *  call with "ColorBox"
 */
export default connect(mapStateToProps, mapDispatchToProps)(ColorBox);
