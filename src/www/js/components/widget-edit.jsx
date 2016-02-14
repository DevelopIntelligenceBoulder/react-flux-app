"use strict";

const
	React = require("react");

module.exports = class WidgetEdit extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (<div>Edit {this.props.widget.name}</div>);
	}

};
