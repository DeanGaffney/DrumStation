import React, { Component } from 'react';
import './App.css';
import BassDrum from './pages/bass/BassDrum';
import SnareDrum from './pages/snare/SnareDrum';

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
        snareControl4: 0,
      }
    }
  }
  
  /**
   * Called when a drum control is changed, 
   * the drum control in the app state is then updated with the new value
   * @param {string} drumType - type of drum eg. (bass, snare) 
   * @param {number} controlNum - the control number on the drum 
   * @param {number} newValue - the new value of the control 
   */
  onDrumControlChange(drumType, controlNum, newValue){
    var drumControlKey = drumType + "Control" + controlNum;
    let drum = Object.assign({}, this.state[drumType]);
    drum[drumControlKey] = newValue;
    this.setState({[drumType] : drum});
  }

  render() {
    return (
      <div>
        <BassDrum bass={this.state.bass} onDrumControlChange={this.onDrumControlChange.bind(this)}/>
        <SnareDrum snare={this.state.snare} onDrumControlChange={this.onDrumControlChange.bind(this)} />
      </div>
    );
  }
}

export default App;
