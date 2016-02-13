"use strict";

const
	React = require("react");

module.exports = class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer>
				Distributed under the MIT License.
			</footer>
		);
	}

};
