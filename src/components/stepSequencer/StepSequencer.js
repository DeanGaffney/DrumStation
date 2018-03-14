import React from 'react';
import Step from '../step/Step';

class StepSequencer extends React.Component {

  /**
   * Maps a list of numbers 1..16 (number for each step in the sequencer)
   * to a Step component. The Step components are returned in a list
   */
  StepsList(){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const stepList = numbers.map((number) => 
      <Step key={this.props.drumType + number.toString()} 
            number={number}
            drumType={this.props.drumType}
            onStepSequencerChange={this.props.onStepSequencerChange}
            shouldPlayStep={this.props.steps[number - 1]}/>
    );
    return stepList;
  }

  render() {
    return (
      <div className="text-center">
        {this.StepsList()} 
      </div>
    );
  }
}

export default StepSequencer;
