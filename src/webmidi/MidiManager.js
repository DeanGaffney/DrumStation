
import WebMidi from '../../node_modules/webmidi/webmidi.min.js'

class MidiManager {
    
    constructor(){
        this.enable();
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
            }
        });
    }
}

export let midiManager = new MidiManager();