import { changeColor } from '../store/actions';
import { connect } from 'react-redux';
import ColorBox from '../components/ColorBox';

function mapStateToProps(state) {
  debugger;
  console.log('*** CONTAINER *** Mapping Redux State to React Props...');
  return {
    randomColor: state.randomColor
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('*** CONTAINER *** Mapping Dispatch (Actions) to React Props...');
  return {
    changeColor: () => dispatch(changeColor())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorBox);
