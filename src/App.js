import React, { Component } from 'react';

import './App.css';
import BassDrum from './pages/bass/BassDrum';
import SnareDrum from './pages/snare/SnareDrum';
import TomTom from './pages/tomTom/TomTom';
import HiHat from './pages/hihat/HiHat';
import Cymbals from './pages/cymbals/Cymbals';
import Cowbell from './pages/cowbell/Cowbell';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { midiManager } from './webmidi/MidiManager';
import PlayButton from './components/playButton/PlayButton';
import CueButton from './components/cueButton/CueButton';
import ClearButton from './components/clearButton/ClearButton';
import GlobalClearButton from './components/clearButton/GlobalClearButton';
import StepSequencerGroup from './components/stepSequencer/StepSequencerGroup';
import TempoKnob from './components/knobs/TempoKnob';

class App extends Component {

  constructor() {
    super();
    this.state = {
      drums:[
        {
            bassControl1: 0,
            bassControl2: 0,
            bassControl3: 0,
            bassControl4: 0,
            steps: [],
            note: "C1",
            name: "Bass",
            type: "bass"
        },
        {
            snareControl1: 0,
            snareControl2: 0,
            snareControl3: 0,
            snareControl4: 0,
            steps: [],
            note: "D1",
            name: "Snare",
            type: "snare"
        },
        {
            tomTomControl1: 0,
            tomTomControl2: 0,
            tomTomControl3: 0,
            steps: [],
            note: "E1",
            name: "Tom",
            type: "tomTom"
        },
        {
            hihatControl1: 0,
            hihatControl2: 0,
            hihatControl3: 0,
            steps: [],
            note: "F#1",
            name: "Hi Hat",
            type: "hihat"
        },
        {
            cymbalsControl1: 0,
            cymbalsControl2: 0,
            cymbalsControl3: 0,
            steps: [],
            note: "C#2",
            name: "Cymbals",
            type: "cymbals"
        },
        {
          cowbellControl1: 0,
          cowbellControl2: 0,
          steps: [],
          note: "D#2",
          name: "Cowbell",
          type: "cowbell"
        }
      ],
      isPlaying: false,
      cue: false,
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
    var stateCopy = Object.assign({}, this.state);
    var drum = stateCopy.drums[this.getDrumIndexByType(drumType)];
    var drumControlKey = drumType + "Control" + controlNum;
    drum[drumControlKey] = newValue;
    this.setState(stateCopy);
    midiManager.sendControlChange(controlChangeNum, newValue, "all", {time: 1000});

    if(this.state.isPlaying){
      this.updateMidiManagerDrums();
    }
  }

 onTempoChange(newValue){
   this.setState({bpm: newValue});
   midiManager.bpm = newValue;
   console.log(this.state.bpm);
 }

  getDrumIndexByType(drumType){
    var index = 0;
    switch(drumType){
      case "snare":
        index = 1;
        break;
      case "tomTom":
        index = 2;
        break;
      case "hihat":
        index = 3;
        break;
      case "cymbals":
        index = 4;
        break;
      case "cowbell":
        index = 5;
        break;
      default:
        index = 0;    //bass will default to 0
    }
    return index;
  }

  /**
   * Called when a step in a step sequencer changes
   * @param {string} drumType - type of drum eg. (bass, snare)
   * @param {number} stepNumber - the number of the step in the step sequencer
   * @param {boolean} isPlaying - the value to trigger the step as playing or not playing
   * */
  onStepSequencerChange(drumType, stepNumber, isPlaying){
    var stateCopy = Object.assign({}, this.state);
    var drum = stateCopy.drums[this.getDrumIndexByType(drumType)];
    if(isPlaying){
      drum['steps'].push(stepNumber);
    }else{
      drum['steps'].splice(drum['steps'].indexOf(stepNumber), 1);
    }
    this.setState(stateCopy);

    if(this.state.isPlaying){
      this.updateMidiManagerDrums();
    }
  }

  /**
   * Toggle the state of the playing attribute when called
   * @param {boolean} isPlaying - true if the state is playing, false otherwise
   */
  onPlayClicked(isPlaying){
    this.setState({isPlaying: isPlaying}, () => {
      if (isPlaying) {
          this.updateMidiManagerDrums();
          midiManager.play();
      } else {
        midiManager.stop();
      }
    });
  }

  onCueClicked(cue){
    midiManager.currentIndex = 0;
  }

  onClearClicked(drumType){
     var stateCopy = Object.assign({}, this.state);
     var drumIndex = this.getDrumIndexByType(drumType);
     var drum = stateCopy.drums[drumIndex];
     drum.steps = [];
     this.setState(stateCopy);
  }

//Not working
  onGlobalClearClicked(){
    var drumsCopy = JSON.parse(JSON.stringify(this.state.drums));
    for(var i = 0; i <= drumsCopy.length; i++){
      this.onClearClicked(drumsCopy[i].type);
    }
  }

  updateMidiManagerDrums(){
    midiManager.drums = this.state.drums;
  }

  render() {
    return (
      <Tabs>

        <TabList>
          <Tab>Bass</Tab>
          <Tab>Snare</Tab>
          <Tab>Tom Toms</Tab>
          <Tab>Hi Hat</Tab>
          <Tab>Cymbals</Tab>
          <Tab>Cowbell</Tab>
          <Tab>Global Steps</Tab>
        </TabList>

        <TabPanel>
            <BassDrum bass={this.state.drums[0]} onDrumControlChange={this.onDrumControlChange.bind(this)} onStepSequencerChange={this.onStepSequencerChange.bind(this)}/>
            <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)}/>
            <CueButton cue={this.state.isPlaying} onCueClicked={this.onCueClicked.bind(this)}/>
            <ClearButton drumType={this.state.drums[0].type} onClearClicked={this.onClearClicked.bind(this)}/>
            <TempoKnob value={this.state.bpm} onTempoChange={this.onTempoChange.bind(this)}/>
        </TabPanel>

        <TabPanel>
          <SnareDrum snare={this.state.drums[1]} onDrumControlChange={this.onDrumControlChange.bind(this)} onStepSequencerChange={this.onStepSequencerChange.bind(this)} />
          <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)} />
          <CueButton cue={this.state.isPlaying} onCueClicked={this.onCueClicked.bind(this)} />
          <ClearButton drumType={this.state.drums[1].type} onClearClicked={this.onClearClicked.bind(this)}/>
        </TabPanel>

        <TabPanel>
          <TomTom tomTom={this.state.drums[2]} onDrumControlChange={this.onDrumControlChange.bind(this)} onStepSequencerChange={this.onStepSequencerChange.bind(this)} />
          <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)} />
          <CueButton cue={this.state.isPlaying} onCueClicked={this.onCueClicked.bind(this)} />
          <ClearButton drumType={this.state.drums[2].type} onClearClicked={this.onClearClicked.bind(this)}/>
        </TabPanel>

        <TabPanel>
          <HiHat hihat={this.state.drums[3]} onDrumControlChange={this.onDrumControlChange.bind(this)} onStepSequencerChange={this.onStepSequencerChange.bind(this)} />
          <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)} />
          <CueButton cue={this.state.isPlaying} onCueClicked={this.onCueClicked.bind(this)} />
          <ClearButton drumType={this.state.drums[3].type} onClearClicked={this.onClearClicked.bind(this)}/>
        </TabPanel>

        <TabPanel>
          <Cymbals cymbals={this.state.drums[4]} onDrumControlChange={this.onDrumControlChange.bind(this)} onStepSequencerChange={this.onStepSequencerChange.bind(this)} />
          <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)} />
          <CueButton cue={this.state.isPlaying} onCueClicked={this.onCueClicked.bind(this)} />
          <ClearButton drumType={this.state.drums[4].type} onClearClicked={this.onClearClicked.bind(this)}/>
        </TabPanel>

        <TabPanel>
          <Cowbell cowbell={this.state.drums[5]} onDrumControlChange={this.onDrumControlChange.bind(this)} onStepSequencerChange={this.onStepSequencerChange.bind(this)} />
          <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)} />
          <CueButton cue={this.state.isPlaying} onCueClicked={this.onCueClicked.bind(this)} />
          <ClearButton drumType={this.state.drums[5].type} onClearClicked={this.onClearClicked.bind(this)}/>
        </TabPanel>

        <TabPanel>
            <StepSequencerGroup drums={this.state.drums} onStepSequencerChange={this.onStepSequencerChange.bind(this)}/>
            <PlayButton isPlaying={this.state.isPlaying} onPlayClicked={this.onPlayClicked.bind(this)}/>
            <CueButton cue={this.state.isPlaying} onCueClicked={this.onCueClicked.bind(this)}/>
            <GlobalClearButton onGlobalClearClicked={this.onGlobalClearClicked.bind(this)}/>
        </TabPanel>

      </Tabs>
    );
  }
}

export default App;
