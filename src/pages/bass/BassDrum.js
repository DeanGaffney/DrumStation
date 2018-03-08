import React, { Component } from 'react'
import DrumKnob from '../../components/knobs/DrumKnob';
import '../Drum.css';

class BassDrum extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row">

          <div className="drum-control-col col-6 text-center">
            <DrumKnob
             controlValue={this.props.bass.bassControl1}
             onDrumControlChange={this.props.onDrumControlChange}
             controlNum={1}
             drumType={"bass"}
             controlChangeNum={1}/>
          </div>
          <div className="drum-control-col col-6 text-center">
            <DrumKnob
              controlValue={this.props.bass.bassControl2}
              onDrumControlChange={this.props.onDrumControlChange}
              controlNum={2}
              drumType={"bass"}
              controlChangeNum={7} />
          </div>

        </div>

        <div className="row">

          <div className="drum-control-col col-6 text-center">
            <DrumKnob
              controlValue={this.props.bass.bassControl3}
              onDrumControlChange={this.props.onDrumControlChange}
              controlNum={3}
              drumType={"bass"}
              controlChangeNum={7}/>
          </div>
          <div className="drum-control-col col-6 text-center">
            <DrumKnob
              controlValue={this.props.bass.bassControl4}
              onDrumControlChange={this.props.onDrumControlChange}
              controlNum={4}
              drumType={"bass"}
              controlChangeNum={7}/>
          </div>

        </div>

      </div>
    );
  }
}

export default BassDrum;
