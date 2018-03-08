import React, { Component } from 'react'
import DrumKnob from '../../components/knobs/DrumKnob';
import '../Drum.css';

class SnareDrum extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="row">

                    <div className="drum-control-col col-6 text-center">
                        <DrumKnob
                            controlValue={this.props.snare.bassControl1}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={1}
                            drumType={"snare"}
                            controlChangeNum={1} />
                    </div>
                    <div className="drum-control-col col-6 text-center">
                        <DrumKnob
                            controlValue={this.props.snare.bassControl2}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={2}
                            drumType={"snare"}
                            controlChangeNum={1} />
                    </div>

                </div>

                <div className="row">

                    <div className="drum-control-col col-6 text-center">
                        <DrumKnob
                            controlValue={this.props.snare.bassControl3}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={3}
                            drumType={"snare"}
                            controlChangeNum={1} />
                    </div>
                    <div className="drum-control-col col-6 text-center">
                        <DrumKnob
                            controlValue={this.props.snare.bassControl4}
                            onDrumControlChange={this.props.onDrumControlChange}
                            controlNum={4}
                            drumType={"snare"}
                            controlChangeNum={1} />
                    </div>

                </div>

            </div>
        );
    }
}

export default SnareDrum;
