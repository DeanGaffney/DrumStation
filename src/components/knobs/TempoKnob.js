import React from 'react';
import Knob from 'react-canvas-knob';

class TempoKnob extends React.Component {

  state = {
    value: 0
  }

  /**
  * Set the state value to be that of the App.js State
  * just before the element mounts to the DOM
  **/
  componentWillMount(){
    this.setState({value: this.props.bpm});
  }

  /**
   * Handles a change on a tempo control component
   * @param {number} - the new value to set in the componenet state
   */
  handleChange = (newValue) => {
    //call the parent function to update the main state of the app
    this.props.onDrumControlChange(this.props.drumType, this.props.controlNum, newValue, this.props.controlChangeNum);
    this.setState({value: newValue});
  };

  render() {
    return (
      <Knob
        className="tempo-knob"
        value={this.state.value}
        onChange={this.handleChange}
        min={0}
        max={180}
      />
    );
  }
}

export default TempoKnob;
