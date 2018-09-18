import React from 'react';
import {Keys} from './keys';
import {Tools} from './tools';

export class Keyboard extends React.Component {
  render() {
    return (
      <div className="outer-grid">
        <div id="drum-machine">
          <div className="handles" />
          <div className="handles" />
          <div className="inner-grid">
            <Keys
              pattern={this.props.pattern}
              display={this.props.display}
              state={this.props.state}
              className="keys"
            />
            <Tools
              powerSwitch={this.props.powerSwitch}
              state={this.props.state}
              patternChange={this.props.patternChange}
              changeVolume={this.props.changeVolume}
            />
          </div>
        </div>
      </div>
    );
  }
}

