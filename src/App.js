import React, { Component } from 'react';

import './App.css';
import BassDrum from './pages/bass/BassDrum';
import SnareDrum from './pages/snare/SnareDrum';
import HiHat from './pages/hihat/HiHat';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { midiManager } from './webmidi/MidiManager';

class App extends Component {

  constructor() {
    super();
    this.state = {
      bass: {
        bassControl1: 0,
        bassControl2: 0,
        bassControl3: 0,
        bassControl4: 0
      },
      snare: {
        snareControl1: 0,
        snareControl2: 0,
        snareControl3: 0,
        snareControl4: 0
      },
      hihat: {
        hihatControl1: 0,
        hihatControl2: 0
      },
      play: false
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
  onDrumControlChange(drumType, controlNum, newValue, controlChangeNum) {
    var drumControlKey = drumType + "Control" + controlNum;
    let drum = Object.assign({}, this.state[drumType]);
    drum[drumControlKey] = newValue;
    this.setState({ [drumType]: drum });
    //midiManager.sendControlChange(controlNum, newValue, "all");
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
          <div>
            <BassDrum bass={this.state.bass} onDrumControlChange={this.onDrumControlChange.bind(this)} />
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/> 1
              </label>
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/> 2
              </label>
            </div>
            <div class="form-check form-check-inline disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 3
              </label>
           </div>
            <div class="form-check form-check-inline disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 4
              </label>
           </div>
            <div class="form-check form-check-inline disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 5
              </label>
           </div>
            <div class="form-check form-check-inline disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 6
              </label>
           </div>
            <div class="form-check form-check-inline disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 7
              </label>
           </div>
            <div class="form-check form-check-inline disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 8
              </label>
           </div>
            <div class="form-check form-check-inline disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 9
              </label>
           </div>
            <div class="form-check form-check-inline disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 10
              </label>
           </div>
            <div class="form-check form-check-inline disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 11
              </label>
           </div>
            <div class="form-check form-check-inline disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 12
              </label>
           </div>

          </div>
        </TabPanel>

        <TabPanel>
          <SnareDrum snare={this.state.snare} onDrumControlChange={this.onDrumControlChange.bind(this)} />
        </TabPanel>

        <TabPanel>
          <HiHat hihat={this.state.hihat} onDrumControlChange={this.onDrumControlChange.bind(this)} />
        </TabPanel>

      </Tabs>
    );
  }
}

export default App;
