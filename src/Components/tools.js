import React from 'react';

export class Tools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patternState: false
    };
    this.patternColor = this.patternColor.bind(this);
  }

  patternColor() {
    this.setState({
      patternState: !this.state.patternState
    });
  }

  render() {
    
    let patternColor = (this.props.state.power === 'off') ? 'off' : (this.state.patternState ? "active" : null);
    let powerImg =  (this.props.state.power === 'off') ? 'https://i.imgur.com/7WDLm7a.png' : 'https://i.imgur.com/xdWd48n.png';
    
    return (
      <div className="tools">
        <div id="power" onClick={this.props.powerSwitch} >
        <img src={powerImg} alt="power-icon"/>
        </div>
        <div id="volume">
          <img src="https://image.flaticon.com/icons/svg/23/23649.svg" alt="volume-icon" />
          <input
            className="slider"
            id="myRange"
            ref="measure"
            onChange={() => this.props.changeVolume(this.refs.measure.value)}
            type="range"
            min="1"
            max="100"
            defaultValue="50"
          />
        </div>
        <div id="display">{this.props.state.display}</div>
        <div
          id="pattern"
          className={patternColor}
          onMouseDown={this.patternColor}
          onMouseUp={this.patternColor}
          onClick={this.props.patternChange}
        >
          PATTERN
        </div>
      </div>
    );
  }
}

