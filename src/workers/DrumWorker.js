import  { midiManager } from '../webmidi/MidiManager';

onmessage = function (e) {
    console.log('Message received from main script');
    var workerResult = 'Received from main: ' + (e.data);
}
