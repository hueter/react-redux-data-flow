import React, { Component } from 'react';
import ColorBoxContainer from '../containers/ColorBoxContainer';

class App extends Component {
  /**
   * Note that App specifically renders the Container component,
   *  which wraps the display component ColorBox. Any time a component
   *  subscribes to Redux, its parent needs to render its container instead of
   *  the regular component.
   */
  render() {
    return (
      <div className="App">
        <ColorBoxContainer />
      </div>
    );
  }
}

export default App;
