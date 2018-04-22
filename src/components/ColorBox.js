import React, { Component } from 'react';
import './ColorBox.css';
import PropTypes from 'prop-types';

class ColorBox extends Component {
  render() {
    return (
      <div>
        <div
          id="colorBox"
          style={{
            backgroundColor: this.props.randomColor // box color is assigned dynamically as a prop
          }}
        />
        <button id="colorChanger" onClick={this.props.changeColor}>
          Change Colors!
        </button>
        <button id="logButton" onClick={this.props.changeLoggingType}>
          {this.props.loggingType}
        </button>
      </div>
    );
  }
}

ColorBox.defaultProps = {
  loggingType: 'Debugger Mode',
  changeLoggingType: () => alert('Mode Button clicked but nothing happened'),
  changeColor: () => alert('Color Button clicked but nothing happened'),
  randomColor: 'black'
};

ColorBox.propTypes = {
  loggingType: PropTypes.string.isRequired,
  changeLoggingType: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired,
  randomColor: PropTypes.string.isRequired
};

export default ColorBox;
