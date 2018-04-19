import React, { Component } from 'react'
import DrumKnob from '../../components/knobs/DrumKnob';
import StepSequencer from '../../components/stepSequencer/StepSequencer';
import '../Drum.css';

class HiHat extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row">

          <div className="drum-control-col col-6 text-center">
          <h2>Tune</h2>
            <DrumKnob
             controlValue={this.props.hihat.hihatControl1}
             onDrumControlChange={this.props.onDrumControlChange}
             controlNum={1}
             drumType={"hihat"}
             controlChangeNum={55}/>
          </div>

          <div className="drum-control-col col-6 text-center">
          <h2>Level</h2>
            <DrumKnob
              controlValue={this.props.hihat.hihatControl2}
              onDrumControlChange={this.props.onDrumControlChange}
              controlNum={2}
              drumType={"hihat"}
              controlChangeNum={2} />
          </div>

        </div>

        <div className="row">

          <div className="drum-control-col col-6 text-center">
          <h2>Decay</h2>
            <DrumKnob
              controlValue={this.props.hihat.hihatControl3}
              onDrumControlChange={this.props.onDrumControlChange}
              controlNum={3}
              drumType={"hihat"}
              controlChangeNum={3} />
          </div>

        </div>
        <StepSequencer steps={this.props.hihat.steps}
          drumType={"hihat"}
          onStepSequencerChange={this.props.onStepSequencerChange}
        />
      </div>
    );
  }
}

export default HiHat;
