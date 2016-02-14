"use strict";

const
	React = require("react");

module.exports = class WidgetView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (<div>View {this.props.widget.name}</div>);
	}
};
