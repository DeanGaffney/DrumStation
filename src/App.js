import React, { Component } from 'react';
import './App.css';
import BassDrum from './pages/bass/BassDrum';

class App extends Component {

  constructor(){
    super();
    this.state = {
      bass:{
        bassControl1: 50,
        bassControl2: 50,
        bassControl3: 50,
        bassControl4: 50
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
      </div>
    );
  }
}

export default App;
