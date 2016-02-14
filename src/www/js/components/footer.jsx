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
				Created for these <a href='http://www.sitepoint.com/author/ericgreene/'>SitePoint React Blog Posts</a>.
				Distributed under the MIT License.
			</footer>
		);
	}

};
