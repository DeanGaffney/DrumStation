import React from 'react';
import {midiManager} from '../../webmidi/MidiManager';

class PlayButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isPlaying: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
      midiManager.drumLoop(120, true, this.props.play);
      console.log("handleClick");
    }




    render() {
        return (
          <button onClick={() => {this.handleClick()}}>Play</button>
        );
    }
}

export default PlayButton;
