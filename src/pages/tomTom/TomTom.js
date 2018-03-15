import React, { Component } from 'react'
import DrumKnob from '../../components/knobs/DrumKnob';
import StepSequencer from '../../components/stepSequencer/StepSequencer';
import '../Drum.css';

class TomTom extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row">

          <div className="drum-control-col col-6 text-center">
            <DrumKnob
             controlValue={this.props.tomTom.tomTomControl1}
             onDrumControlChange={this.props.onDrumControlChange}
             controlNum={1}
             drumType={"tomTom"}
             controlChangeNum={3}/>
          </div>

          <div className="drum-control-col col-6 text-center">
            <DrumKnob
              controlValue={this.props.tomTom.tomTomControl2}
              onDrumControlChange={this.props.onDrumControlChange}
              controlNum={2}
              drumType={"tomTom"}
              controlChangeNum={3} />
          </div>

          <div className="drum-control-col col-6 text-center">
            <DrumKnob
              controlValue={this.props.tomTom.tomTomControl2}
              onDrumControlChange={this.props.onDrumControlChange}
              controlNum={3}
              drumType={"tomTom"}
              controlChangeNum={3} />
          </div>

        </div>
        <StepSequencer steps={this.props.tomTom.steps}
          drumType={"tomTom"}
          onStepSequencerChange={this.props.onStepSequencerChange}
        />
      </div>
    );
  }
}

export default TomTom;
