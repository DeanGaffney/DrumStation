
// import WebMidi from '../../node_modules/webmidi/webmidi.min.js'

// class MidiManager {

//     constructor(){
//         this.enable();
//         this.output={};
//     }


//     /**
//      * Enables WebMidi
//      */
//     enable(){
//         WebMidi.enable(function (err) {
//             if (err) {
//                 console.log("WebMidi could not be enabled.", err);
//             } else {
//                 console.log("WebMidi enabled!");
//                 midiManager.output = WebMidi.outputs[1];
//                 midiManager.playNote("D2", "all", {duration: 20000});
//             }
//         });
//     }

//     playNote(note, channel, noteOptions){
//       this.output.playNote(note, channel, noteOptions);
//     }

//     sendControlChange(ctrlNum, value,  channel, ccOptions){
//       this.output.sendControlChange(ctrlNum, value, channel, ccOptions);
//     }

// }

// export let midiManager = new MidiManager();
