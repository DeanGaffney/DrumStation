import {midiManager} from '../webmidi/MidiManager'

export function start(data) {
    midiManager.intervalId = setInterval(function () {
        console.log("yes");
        for (var i = 0; i < midiManager.drums.length; i++) {
            if (midiManager.drums[i].steps.includes(midiManager.currentIndex + 1)) {
                midiManager.playNote(midiManager.drums[i].note, "all", 1000, 1000);
            }
        }
        midiManager.currentIndex = (midiManager.currentIndex + 1) % 16;
    }, (60 / midiManager.bpm / 4) * 1000);
}