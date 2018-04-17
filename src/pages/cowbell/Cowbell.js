import React, { Component } from 'react'
import DrumKnob from '../../components/knobs/DrumKnob';
import StepSequencer from '../../components/stepSequencer/StepSequencer';
import '../Drum.css';

class Cowbell extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="row">

                    <div className="drum-control-col col-6 text-center">
                        <h2>Distortion</h2>
                        <DrumKnob
                            controlValue={this.props.cowbell.cowbellControl1}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={1}
                            drumType={"cowbell"}
                            controlChangeNum={52} />
                    </div>
                    <div className="drum-control-col col-6 text-center">
                        <h2>Tune</h2>
                        <DrumKnob
                            controlValue={this.props.cowbell.cowbellControl2}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={2}
                            drumType={"cowbell"}
                            controlChangeNum={53} />
                    </div>

                </div>

                <StepSequencer steps={this.props.cowbell.steps}
                    drumType={"cowbell"}
                    onStepSequencerChange={this.props.onStepSequencerChange}
                />
            </div>
        );
    }
}

export default Cowbell;
