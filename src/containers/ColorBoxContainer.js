import { changeColor } from '../store/actions';
import { logStuff } from '../helpers';
import { connect } from 'react-redux';
import ColorBox from '../components/ColorBox';

function mapStateToProps(state) {
  logStuff('Map State to Props Invoked', '#1565C0', ['Redux State', state]);
  // debugger;

  return {
    randomColor: state.randomColor
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  logStuff('Map Dispatch to Props Invoked', '#37474F');
  // debugger;

  return {
    changeColor: () => dispatch(changeColor())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorBox);
