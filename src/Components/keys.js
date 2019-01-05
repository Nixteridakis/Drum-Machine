import React from "react"
import {Key} from "./key"

export class Keys extends React.Component {
	render() {
		let list = this.props.pattern.map((key) => (
			<Key
				keyTrigger={key.key}
				keyId={key.name}
				audio={key.source}
				keyCode={key.keycode}
				display={this.props.display}
				volume={this.props.state.volume}
				power={this.props.state.power}
			>
				{key.name}
			</Key>
		))
		return <div className="keys">{list}</div>
	}
}

