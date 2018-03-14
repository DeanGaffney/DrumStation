
import WebMidi from '../../node_modules/webmidi/webmidi.min.js'

class MidiManager {

    constructor(){
        this.enable();
        this.output={};
    }


    /**
     * Enables WebMidi
     */
    enable(){
        WebMidi.enable(function (err) {
            if (err) {
                console.log("WebMidi could not be enabled.", err);
            } else {
                console.log("WebMidi enabled!");
                midiManager.output = WebMidi.getOutputByName("loopMIDI Port");
                //midiManager.playNote("D2", "all", {time: duration: 20000});
            }
        });
    }

    playNote(note, channel,time){
      this.output.playNote(note, channel, {time: time});
    }

    drumLoop(bpm, isPlaying, drum){
      var sixteenth = (60/bpm /4 ) * 1000;
      if(isPlaying){
        for(var i = 0; i<drum.steps;i++){
          var offset = (i * 16 * sixteenth) - sixteenth;
          midiManager.playNote(drum.note, "all", sixteenth*drum.steps[i]+offset);
        }
      }
    }

    sendControlChange(ctrlNum, value,  channel, ccOptions){
      this.output.sendControlChange(ctrlNum, value, channel, ccOptions);
    }

}

export let midiManager = new MidiManager();
