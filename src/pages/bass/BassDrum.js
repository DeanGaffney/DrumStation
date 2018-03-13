import React, { Component } from 'react'
import DrumKnob from '../../components/knobs/DrumKnob';
import StepSequencer from '../../components/stepSequencer/StepSequencer';
import '../Drum.css';

class BassDrum extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row">

          <div className="drum-control-col col-6 text-center">
          <h2>Tune</h2>
            <DrumKnob
             controlValue={this.props.bass.bassControl1}
             onDrumControlChange={this.props.onDrumControlChange}
             controlNum={1}
             drumType={"bass"}
             controlChangeNum={1}/>
          </div>
          <div className="drum-control-col col-6 text-center">
          <h2>Level</h2>
            <DrumKnob
              controlValue={this.props.bass.bassControl2}
              onDrumControlChange={this.props.onDrumControlChange}
              controlNum={2}
              drumType={"bass"}
              controlChangeNum={2} />
          </div>

        </div>

        <div className="row">

          <div className="drum-control-col col-6 text-center">
          <h2>Attack/Tone</h2>
            <DrumKnob
              controlValue={this.props.bass.bassControl3}
              onDrumControlChange={this.props.onDrumControlChange}
              controlNum={3}
              drumType={"bass"}
              controlChangeNum={3}/>
          </div>
          <div className="drum-control-col col-6 text-center">
          <h2>Decay</h2>
            <DrumKnob
              controlValue={this.props.bass.bassControl4}
              onDrumControlChange={this.props.onDrumControlChange}
              controlNum={4}
              drumType={"bass"}
              controlChangeNum={7}/>
          </div>

        </div>
        <StepSequencer />
      </div>
    );
  }
}

export default BassDrum;
