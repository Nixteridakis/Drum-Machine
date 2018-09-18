import React from 'react';

const activeKey = {
  color: "#cac6c6",
  boxShadow: "0px 1px 14px #c30000f5"
};

const inactiveKey = {
  color: "#f0ecec",
  boxShadow: "0px 6px 35px #ff0000f5"
};

const offKey = {
  boxShadow: "none"
};

export class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keystate: inactiveKey
    };
    this.changeKeyColor = this.changeKeyColor.bind(this);
    this.keyDownPress = this.keyDownPress.bind(this);
    this.keyUpPress = this.keyUpPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownPress);
    document.addEventListener("keyup", this.keyUpPress);
  }

  componentDidUnmount() {
    document.addEventListener("keydown", this.keyDownPress);
    document.addEventListener("keyup", this.keyUpPress);
  }

  changeKeyColor() {
    if (this.props.power === "on") {
      if (this.state.keystate === activeKey){
        this.setState({
          keystate: inactiveKey
        })
    }
      else{
        this.setState({
          keystate: activeKey
        })
      }
    }
  }

  keyDownPress(e) {
    if (this.props.power === "on") {
      if (e.keyCode === this.props.keyCode) {
        this.changeKeyColor();
        this.playSound();
      }
    }
  }

  keyUpPress(e) {
    if (this.props.power === "on") {
      if (e.keyCode === this.props.keyCode) {
        this.changeKeyColor();
      }
    }
  }

  playSound(e) {
    if (this.props.power === "on") {
      const sound = document.getElementById(this.props.keyTrigger);
      sound.volume = this.props.volume;
      sound.play();
      this.props.display(this.props.keyId);
    }
  }

  render() {
    return (
      <div
        style={(this.props.power === 'on') ? (this.state.keystate) : offKey}
        className="drum-pad"
        id={this.props.keyId}
        onClick={this.playSound}
        onMouseDown={this.changeKeyColor}
        onMouseUp={this.changeKeyColor}
        onKeyDown={this.keyDownPress}
        onKeyUp={this.keyUpPress}
      >
        {this.props.keyTrigger}
        <audio
          id={this.props.keyTrigger}
          className="clip"
          src={this.props.audio}
          type="audio/mp3"
        />
      </div>
    );
  }
}

