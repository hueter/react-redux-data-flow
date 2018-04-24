import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.css';
import { logStuff } from '../helpers';

class ColorBox extends Component {
  /**
   * PLEASE IGNORE
   * This method is only implemented to logStuff; there is no
   *  component functionality
   */
  componentDidMount() {
    logStuff('Component Mounted', '#1565C0', ['props', this.props]);
  }

  /**
   * PLEASE IGNORE
   *  This method is only implemented to logStuff; there is no
   *  component functionality
   */
  componentDidUpdate(prevProps) {
    logStuff('Component Updated', '#1565C0', [
      'Previous Props',
      prevProps,
      'Current Props',
      this.props
    ]);
  }

  /**
   * This is a "dumb" component in that it has no state and only renders
   *  what it gets from Redux (via the container). The component also
   *  has no idea what "onClick" does, other than that it's a function.
   *  The ColorBoxContainer is the smart component.
   */
  render() {
    return (
      <div>
        <div
          id="colorBox"
          style={{
            backgroundColor: this.props.color // box color is assigned dynamically as a prop,
          }}
        >
          <img
            src={this.props.imageURL}
            alt="Random gif"
            style={{ width: '300px', padding: '150px 100px' }}
          />
        </div>
        <button id="colorChanger" onClick={this.props.changeColor}>
          Change Colors!
        </button>
        <button id="colorChanger" onClick={this.props.changeGif}>
          Change Gifs!
        </button>
      </div>
    );
  }
}

/**
 * The component should never render with these defaults.
 *  These are here almost as a smoke test to make sure that
 *  the container is being rendered instead of this one.
 *  The container will pass the Redux default props, where the color
 *  is "gray" (check in src/store/reducers).
 */
ColorBox.defaultProps = {
  changeColor: () => alert('Color Button clicked but nothing happened'),
  changeGif: () => alert('Gif Button clicked but nothing happened'),
  color: 'black',
  imageURL: ''
};

/**
 *  Prop Types in this case are mostly for the purpose of
 *  self-documenting what the props are.
 */
ColorBox.propTypes = {
  changeColor: PropTypes.func.isRequired,
  changeGif: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  imageURL: PropTypes.string
};

/**
 * 'export default' is the ES6 Module analog to the
 *  Common.JS equivalent 'module.exports = ColorBox'
 *  When importing a default export component, no destructuring is involved,
 *  e.g. 'import ColorBox from './ColorBox';
 */
export default ColorBox;
