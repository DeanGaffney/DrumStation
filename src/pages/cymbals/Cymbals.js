import React, { Component } from 'react'
import DrumKnob from '../../components/knobs/DrumKnob';
import StepSequencer from '../../components/stepSequencer/StepSequencer';
import '../Drum.css';

class Cymbals extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="row">

                    <div className="drum-control-col col-6 text-center">
                        <h2>Tune</h2>
                        <DrumKnob
                            controlValue={this.props.cymbals.cymbalsControl1}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={1}
                            drumType={"cymbals"}
                            controlChangeNum={1} />
                    </div>
                    <div className="drum-control-col col-6 text-center">
                        <h2>Level</h2>
                        <DrumKnob
                            controlValue={this.props.cymbals.cymbalsControl2}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={2}
                            drumType={"cymbals"}
                            controlChangeNum={2} />
                    </div>

                </div>

                <div className="row">

                    <div className="drum-control-col col-6 text-center">
                        <h2>Attack/Tone</h2>
                        <DrumKnob
                            controlValue={this.props.cymbals.cymbalsControl3}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={3}
                            drumType={"cymbals"}
                            controlChangeNum={3} />
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
