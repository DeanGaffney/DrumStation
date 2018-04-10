import React, { Component } from 'react';

import './App.css';
import BassDrum from './pages/bass/BassDrum';
import SnareDrum from './pages/snare/SnareDrum';
import TomTom from './pages/tomTom/TomTom';
import HiHat from './pages/hihat/HiHat';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { midiManager } from './webmidi/MidiManager';
import PlayButton from './components/playButton/PlayButton';

class App extends Component {

  constructor() {
    super();
    this.state = {
      bass: {
        bassControl1: 0,
        bassControl2: 0,
        bassControl3: 0,
        bassControl4: 0,
        steps: [],
        note: "C1"
      },
      snare: {
        snareControl1: 0,
        snareControl2: 0,
        snareControl3: 0,
        snareControl4: 0,
        steps:[],
        note: "D1"
      },
      tomTom: {
        tomTomControl1: 0,
        tomTomControl2: 0,
        tomTomControl3: 0,
        steps:[],
        note: "F1"
      },
      hihat: {
        hihatControl1: 0,
        hihatControl2: 0,
        steps: [],
        note: "F#1"
      },
      isPlaying: false,
      bpm: 120
    }
  }



  /**
   * Called when a drum control is changed,
   * the drum control in the app state is then updated with the new value
   * @param {string} drumType - type of drum eg. (bass, snare)
   * @param {number} controlNum - the control number on the drum
   * @param {number} newValue - the new value of the control pitch
   * @param {number} controlChangeNum - value of the control change message
   */
  onDrumControlChange(drumType, controlNum, newValue, controlChangeNum) {
    var drumControlKey = drumType + "Control" + controlNum;
    let drum = Object.assign({}, this.state[drumType]);
    drum[drumControlKey] = newValue;
    this.setState({ [drumType]: drum });

    // midiManager.sendControlChange(controlChangeNum, newValue, "all", {time:1000});
    // midiManager.output.sendPitchBend(newValue / 127, "all", {time: 1000});
    
    if(this.state.isPlaying){
      midiManager.drums = [this.state.bass, this.state.snare,this.state.hihat, this.state.tomTom];
    }
  }

  /**
   * Called when a step in a step sequencer changes
   * @param {string} drumType - type of drum eg. (bass, snare)
   * @param {number} stepNumber - the number of the step in the step sequencer
   * @param {boolean} isPlaying - the value to trigger the step as playing or not playing
   * */
  onStepSequencerChange(drumType, stepNumber, isPlaying){
    let drum = Object.assign({}, this.state[drumType]);
    if(isPlaying){
      drum['steps'].push(stepNumber);
    }else{
      drum['steps'].splice(drum['steps'].indexOf(stepNumber), 1);
    }
    this.setState({[drumType] : drum});

    if(this.state.isPlaying){
      midiManager.drums = [this.state.bass, this.state.snare, this.state.hihat, this.state.tomTom];
    }
  }

  /**
   * Toggle the state of the playing attribute when called
   * @param {boolean} isPlaying - true if the state is playing, false otherwise
   */
  onPlayClicked(isPlaying){
    this.setState({isPlaying: isPlaying}, () => {
      if (isPlaying) {
          midiManager.drums = [this.state.bass, this.state.snare, this.state.hihat, this.state.tomTom];
          midiManager.play(this.state);
      } else {
        midiManager.stop();
      }
    });
  }

  render() {
    return (
      <Tabs>

        <TabList>
          <Tab>Bass</Tab>
          <Tab>Snare</Tab>
          <Tab>Tom Toms</Tab>
          <Tab>Hi Hat</Tab>
        </TabList>

        <TabPanel>
            <BassDrum bass={this.state.bass} onDrumControlChange={this.onDrumControlChange.bind(this)} onStepSequencerChange={this.onStepSequencerChange.bind(this)}/>
            <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)}/>
        </TabPanel>

        <TabPanel>
          <SnareDrum snare={this.state.snare} onDrumControlChange={this.onDrumControlChange.bind(this)} onStepSequencerChange={this.onStepSequencerChange.bind(this)} />
          <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)} />
        </TabPanel>

        <TabPanel>
          <TomTom tomTom={this.state.tomTom} onDrumControlChange={this.onDrumControlChange.bind(this)} onStepSequencerChange={this.onStepSequencerChange.bind(this)} />
          <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)} />
        </TabPanel>

        <TabPanel>
          <HiHat hihat={this.state.hihat} onDrumControlChange={this.onDrumControlChange.bind(this)} onStepSequencerChange={this.onStepSequencerChange.bind(this)} />
          <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)} />
        </TabPanel>

      </Tabs>
    );
  }
}

export default App;
