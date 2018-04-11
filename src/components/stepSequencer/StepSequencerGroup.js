import React from 'react';
import StepSequencer from './StepSequencer';

class StepSequencerGroup extends React.Component {

  render() {
    return (
      <div className="text-center">
        {this.props.drums.map((drum) =>
          <div className="row">
            <div className="col-1">
              <h4>{drum.name}</h4>
            </div>
            <div className="col-10">
              <StepSequencer key={drum.name}
                  steps={drum.steps}
                  drumType={drum.type}
                  onStepSequencerChange={this.props.onStepSequencerChange} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default StepSequencerGroup;
