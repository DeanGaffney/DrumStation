import React, { Component } from 'react';

import './App.css';
import BassDrum from './pages/bass/BassDrum';
import SnareDrum from './pages/snare/SnareDrum';
import HiHat from './pages/hihat/HiHat';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {midiManager} from './webmidi/MidiManager';

class App extends Component {

  constructor(){
    super();
    this.state = {
      bass:{
        bassControl1: 0,
        bassControl2: 0,
        bassControl3: 0,
        bassControl4: 0
      },
      snare:{
        snareControl1: 0,
        snareControl2: 0,
        snareControl3: 0,
        snareControl4: 0
      },
      hihat:{
        hihatControl1: 0,
        hihatControl2: 0
      },
      play:"Playing"
    }
  }

  /**
   * Called when a drum control is changed,
   * the drum control in the app state is then updated with the new value
   * @param {string} drumType - type of drum eg. (bass, snare)
   * @param {number} controlNum - the control number on the drum
   * @param {number} newValue - the new value of the controlpitch
   * @param {number} controlChangeNum - value of the control change message
   */
  onDrumControlChange(drumType, controlNum, newValue, controlChangeNum){
    var drumControlKey = drumType + "Control" + controlNum;
    let drum = Object.assign({}, this.state[drumType]);
    drum[drumControlKey] = newValue;
    this.setState({[drumType] : drum});
    midiManager.sendControlChange(controlNum, newValue, "all");
  }

  clicked(text){
    this.setState({play: text});
  }

  render() {
    return (
      <Tabs>

        <TabList>
          <Tab>Bass</Tab>
          <Tab>Snare</Tab>
          <Tab>Hi Hat</Tab>
        </TabList>

        <TabPanel>
          {this.state.play}
          <BassDrum bass={this.state.bass} onDrumControlChange={this.onDrumControlChange.bind(this)} />
          <button onClick={ (e) => { this.clicked("Hello"); }}>Button</button>
        </TabPanel>

        <TabPanel>
          <SnareDrum snare={this.state.snare} onDrumControlChange={this.onDrumControlChange.bind(this)} />
        </TabPanel>

        <TabPanel>
          <HiHat hihat={this.state.hihat} onDrumControlChange={this.onDrumControlChange.bind(this)} />
        </TabPanel>

      <div class = "center">
	     <div class="row">
		     <div class="btn-group" data-toggle="buttons">
         <label class="container"> One
           <input type="checkbox" />
             <span class="checkmark"></span>
		  </label>
      <label class="container"> Two
        <input type="checkbox" />
          <span class="checkmark"></span>
		  </label>
      <label class="container"> Three
        <input type="checkbox" />
          <span class="checkmark"></span>
		  </label>
      <label class="container"> Four
        <input type="checkbox" />
          <span class="checkmark"></span>
		  </label>
		</div>
	</div>
 </div>

      </Tabs>
    );
  }
}

export default App;
