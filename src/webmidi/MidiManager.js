
import WebMidi from '../../node_modules/webmidi/webmidi.min.js'
import MidiWorker from 'workerize-loader!../workers/MidiWorker'; // eslint-disable-line import/no-webpack-loader-syntax

class MidiManager {

    constructor(){
        this.enable();
        this.output={};
        this.intervalId = 0;
        this.currentIndex = 0;
        this.drums = [];
        this.bpm = 120;
        this.isPlaying = false;
        this.worker = {};
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
                this.worker = new MidiWorker();
                console.log(midiManager.output);
            }
        });
    }

    playNote(note, channel,time, dur){
      midiManager.output.playNote(note, channel, {time: time});
      midiManager.output.stopNote(note, channel, {time: time + dur});
    }

    sendControlChange(ctrlNum, value,  channel, ccOptions){
      midiManager.output.sendControlChange(ctrlNum, value, channel, ccOptions);
    }

    /**
     * Plays the drums
     */
    play(){
        // midiManager.intervalId = setInterval(function () {
        //   for (var i = 0; i < midiManager.drums.length; i++) {
        //     if (midiManager.drums[i].steps.includes(midiManager.currentIndex + 1)) {
        //       midiManager.playNote(midiManager.drums[i].note, "all", 1000, 1000);
        //     }
        //   }
        //   midiManager.currentIndex = (midiManager.currentIndex + 1) % 16;
        // }, (60 / midiManager.bpm / 4)  * 1000);
        // if(this.worker == "undefined"){
        //     this.worker=  new MidiWorker();
        // }
        this.worker.start();
    }

    /**
     * Stops the drums playing
     */
    stop(){
        clearInterval(midiManager.intervalId);      //stop the setInterval running
        midiManager.output.sendStop();
        this.worker.terminate();
        this.worker = undefined;
        console.log("Not Playing!");
    }
 }

export let midiManager = new MidiManager();
