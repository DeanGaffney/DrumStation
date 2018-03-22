
import WebMidi from '../../node_modules/webmidi/webmidi.min.js'

class MidiManager {

    constructor(){
        this.enable();
        this.output={};
        this.intervalId = 0;
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
                console.log(midiManager.output);
            }
        });
    }

    playNote(note, channel,time){
      midiManager.output.playNote(note, channel, {time: time});
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

    /**
     * Plays the drums
     * @param {Object} appState - the entire App.js state
     */
    play(appState){
        console.log(appState);
        midiManager.intervalId = setInterval(midiManager.playNote, 1000, "D1", "all", 1000);
    }

    /**
     * Stops the drums playing
     */
    stop(){
        clearInterval(midiManager.intervalId);      //stop the setInterval running
        console.log("Not Playing!");
    }

}

export let midiManager = new MidiManager();
