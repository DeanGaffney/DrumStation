import React from 'react';
import StepSequencer from './StepSequencer';

class StepSequencerGroup extends React.Component {

  render() {
    return (
      <div className="text-center">


      <div className="row">
        <div className="col-1 global-drum-name">
         <h4>{this.props.bass.name}</h4>
        </div>
        <div className="col-10">
         <StepSequencer steps={this.props.bass.steps} 
                         drumType={"bass"} 
                         onStepSequencerChange={this.props.onStepSequencerChange}
          />
          </div>   
      </div> 

        <div className="row">
          <div className="col-1 global-drum-name">
            <h4>{this.props.snare.name}</h4>
          </div>
          <div className="col-10">
            <StepSequencer steps={this.props.snare.steps}
                            drumType={"snare"}
                            onStepSequencerChange={this.props.onStepSequencerChange}
              />
          </div>
        </div>

        <div className="row">
          <div className="col-1 global-drum-name">
            <h4>{this.props.tomTom.name}</h4>
          </div>
          <div className="col-10">
            <StepSequencer steps={this.props.tomTom.steps}
                            drumType={"tomTom"}
                            onStepSequencerChange={this.props.onStepSequencerChange}
              />
          </div>
        </div>

        <div className="row">
          <div className="col-1 global-drum-name">
            <h4>{this.props.hihat.name}</h4>
          </div>
          <div className="col-10">
            <StepSequencer steps={this.props.hihat.steps}
                            drumType={"hihat"}
                            onStepSequencerChange={this.props.onStepSequencerChange}
              />
          </div>
        </div>

      </div>
    );
  }
}

export default StepSequencerGroup;
