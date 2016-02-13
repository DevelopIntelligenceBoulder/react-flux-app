"use strict";

const
	React = require("react"),
	ReactDOM = require("react-dom"),
	Header = require("./components/header"),
	WidgetsTable = require("./components/widgets-table"),
	Footer = require("./components/footer");

ReactDOM.render(<div>
		<Header />
		<WidgetsTable />
		<Footer />
	</div>, document.querySelector("main"));
