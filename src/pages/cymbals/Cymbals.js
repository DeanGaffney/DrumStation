import React, { Component } from 'react'
import DrumKnob from '../../components/knobs/DrumKnob';
import StepSequencer from '../../components/stepSequencer/StepSequencer';
import '../Drum.css';

class Cymbals extends Component {
    render() {
        return (
            <div className="container-fluid">
              <div className="row">
                <div className="drum-control-col col-4 text-center">
                        <h2>Tune</h2>
                        <DrumKnob
                            controlValue={this.props.cymbals.cymbalsControl1}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={1}
                            drumType={"cymbals"}
                            controlChangeNum={61} />
                    </div>

                    <div className="drum-control-col col-4 text-center">
                      <div className="deletePadding">
                        <h2>Decay</h2>
                        <DrumKnob
                            controlValue={this.props.cymbals.cymbalsControl3}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={3}
                            drumType={"cymbals"}
                            controlChangeNum={62} />
                       </div>
                    </div>

                    <div className="drum-control-col col-4 text-center">
                        <h2>Level</h2>
                        <DrumKnob
                            controlValue={this.props.cymbals.cymbalsControl2}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={2}
                            drumType={"cymbals"}
                            controlChangeNum={7} />
                    </div>

                  </div>
                <StepSequencer steps={this.props.cymbals.steps}
                    drumType={"cymbals"}
                    onStepSequencerChange={this.props.onStepSequencerChange}
                />
            </div>
        );
    }
}

export default Cymbals;
