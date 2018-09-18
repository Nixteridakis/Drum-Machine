import React from 'react';
import './App.css';
import {Keyboard} from './Components/keyboard';
import {patternA , patternB} from './drum-patterns';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: "off",
      display: "",
      pattern: patternA,
      volume: 0.4
    };
    this.powerSwitch = this.powerSwitch.bind(this);
    this.patternChange = this.patternChange.bind(this);
    this.display = this.display.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  powerSwitch() {
    if (this.state.power === "on") {
      this.setState({
        power: "off",
        display: ""
      });
    } else {
      this.setState({
        power: "on"
      });
    }
  }

  patternChange() {
    this.setState({
      pattern: this.state.pattern === patternA ? patternB : patternA
    });
  }

  display(name) {
    if (this.state.power === 'on'){
    this.setState({
      display: name
    });
    }
  }

  changeVolume(e) {
    this.display(e);
    let num = e / 100;
    this.setState({
      volume: num
    });
  }

  render() {
    return (
      <Keyboard
        powerSwitch={this.powerSwitch}
        pattern={this.state.pattern}
        patternChange={this.patternChange}
        state={this.state}
        display={this.display}
        changeVolume={this.changeVolume}
      />
    );
  }
}

export default App;
