import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.css';
import { logStuff } from '../helpers';

class ColorBox extends Component {
  componentDidMount() {
    logStuff('Component Mounted', '#EF6C00', ['props', this.props]);
  }
  componentDidUpdate(prevProps) {
    logStuff('Component Updated', '#EF6C00', [
      'Previous Props',
      prevProps,
      'Current Props',
      this.props
    ]);
  }
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
      </div>
    );
  }
}

ColorBox.defaultProps = {
  changeColor: () => alert('Color Button clicked but nothing happened'),
  randomColor: 'black'
};

ColorBox.propTypes = {
  changeColor: PropTypes.func.isRequired,
  randomColor: PropTypes.string.isRequired
};

export default ColorBox;
