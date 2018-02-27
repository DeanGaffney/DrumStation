import React from 'react';
import Knob from 'react-canvas-knob';

class DrumKnob extends React.Component {
  
  state = {
    value: 0
  }

  /**
   * Handles a change on a drum control component
   * @param {number} - the new value to set in the componenet state
   */
  handleChange = (newValue) => {
    //call the parent function to update the main state of the app
    this.props.onDrumControlChange("bass", this.props.controlNum, newValue);
    this.setState({value: newValue});
  };

  render() {
    return (
      <Knob
        className="drum-knob"
        value={this.state.value}
        onChange={this.handleChange}
        min={0}
        max={127}
      />
    );
  }
}

export default DrumKnob;