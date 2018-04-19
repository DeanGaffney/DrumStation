import React, { Component } from 'react'
import DrumKnob from '../../components/knobs/DrumKnob';
import StepSequencer from '../../components/stepSequencer/StepSequencer';
import '../Drum.css';

class SnareDrum extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="row">

                    <div className="drum-control-col col-6 text-center">
                    <h2>Tune</h2>
                        <DrumKnob
                            controlValue={this.props.snare.snareControl1}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={1}
                            drumType={"snare"}
                            controlChangeNum={29} />
                    </div>
                    <div className="drum-control-col col-6 text-center">
                    <h2>Level</h2>
                        <DrumKnob
                            controlValue={this.props.snare.snareControl2}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={2}
                            drumType={"snare"}
                            controlChangeNum={7} />
                    </div>

                </div>

                <div className="row">

                    <div className="drum-control-col col-6 text-center">
                    <h2>Tone</h2>
                        <DrumKnob
                            controlValue={this.props.snare.snareControl3}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={3}
                            drumType={"snare"}
                            controlChangeNum={30} />
                    </div>
                    <div className="drum-control-col col-6 text-center">
                    <h2>Snappy</h2>
                        <DrumKnob
                            controlValue={this.props.snare.snareControl4}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={4}
                            drumType={"snare"}
                            controlChangeNum={31} />
                    </div>

                </div>
                <StepSequencer steps={this.props.snare.steps}
                    drumType={"snare"}
                    onStepSequencerChange={this.props.onStepSequencerChange}
                />
            </div>
        );
    }
}

export default SnareDrum;
