
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

    playNote(note, channel,time, dur){
      midiManager.output.playNote(note, channel, {time: time});
      midiManager.output.stopNote(note, channel, {time: time + dur});
    }

    drumLoop(bpm, isPlaying, drum){
      var sixteenth = (60/bpm /4 ) * 1000;
      if(isPlaying){
        for(var i = 0; i<drum.steps;i++){
          var offset = (i * 16 * sixteenth) - sixteenth;
          midiManager.playNote(drum.note, "all", sixteenth*drum.steps[i]+offset, sixteenth);
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

        
        // var repeat = 16;
        // drums = [appState.bass, appState.snare, appState.hihat];
        // for(var k = 0; k < repeat; repeat++){
        //   for(var i = 0; i < drums.length; i++){
        //     for(var j = 0; i < drums[i].steps.length; j++){
        //       midiManager.playNote(drums[i].note, "all");
        //     }
        //   }
        // }
        // var sixteenth = (60/appState.bpm /4 ) * 1000;
        // midiManager.playOneBarLoop(sixteenth);
      //   // midiManager.intervalId = setInterval(midiManager.playNote, 1000, "D1", "all", 1000);//Referrence to the fucnction, interval time, note, channel, duration
      // midiManager.intervalId = setInterval(() => {
      // midiManager.drumLoop(appState.bpm, appState.isPlaying, appState.bass)
      //
      // },60/appState.bpm/4*1000);
    }

    /**
     * Stops the drums playing
     */
    stop(){
        clearInterval(midiManager.intervalId);      //stop the setInterval running
        this.output.sendStop();
        console.log("Not Playing!");
    }

    playOneBarLoop(sixteenth){
      for (var i=0; i<4; i++){

        var offset = (i * 16 * sixteenth) - sixteenth;

        //       1234567890123456
        //KD:36: X   X   X   X
        // midiManager.playNote("C1","all",sixteenth*1+offset,sixteenth);   // kd
        // midiManager.playNote("D1","all",sixteenth*5+offset,sixteenth);   // kd
        // midiManager.playNote("D1","all",sixteenth*13+offset,sixteenth);   // kd
        // midiManager.playNote("C1","all",sixteenth*1+offset,sixteenth);   // kd
        // midiManager.playNote("C1","all",sixteenth*2+offset,sixteenth);   // kd
        // midiManager.playNote("C1","all",sixteenth*3+offset,sixteenth);   // kd
        // midiManager.playNote("C1","all",sixteenth*5+offset,sixteenth);   // kd
        // midiManager.playNote("C1","all",sixteenth*9+offset,sixteenth);   // kd
        // midiManager.playNote("C1","all",sixteenth*13+offset,sixteenth);   // kd
        console.log("playing");
      }
 }


}

export let midiManager = new MidiManager();
