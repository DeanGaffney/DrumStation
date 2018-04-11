import React from 'react';
import StepSequencer from './StepSequencer';

class StepSequencerGroup extends React.Component {

  render() {
    return (
      <div className="text-center">
        <StepSequencer steps={this.props.bass.steps} 
                       drumType={"bass"} 
                       onStepSequencerChange={this.props.onStepSequencerChange}
          />                        
        <StepSequencer steps={this.props.snare.steps}
                        drumType={"snare"}
                        onStepSequencerChange={this.props.onStepSequencerChange}
          />
        <StepSequencer steps={this.props.tomTom.steps}
                        drumType={"tomTom"}
                        onStepSequencerChange={this.props.onStepSequencerChange}
         />
        <StepSequencer steps={this.props.hihat.steps}
                       drumType={"hihat"}
                       onStepSequencerChange={this.props.onStepSequencerChange}
          />

      </div>
    );
  }
}

export default StepSequencerGroup;
