"use strict";

const
	React = require("react"),
	WidgetsTable = require("./widgets-table"),
	WidgetView = require("./widget-view"),
	WidgetEdit = require("./widget-edit"),
	widgetsData = require("../widgets-data");

module.exports = class WidgetsTool extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			currentAction: props.action || "table",
			currentWidgetId: -1,
			widgets: widgetsData
		};
	}

	getWidget(widgetId) {
		return this.state.widgets.filter(function(widget) {
			return widget.id === this.state.currentWidgetId;
		})[0];
	}

	getView(action) {
		switch (action) {
			case "view":
				return <WidgetView widget={this.getWidget(this.state.widgetId)} />;
			case "edit":
				return <WidgetEdit widget={this.getWidget(this.state.widgetId)} />;
			default:
				return <WidgetsTable widgets={this.state.widgets} />;
		}
	}

	render() {
		return (<div>
			<h2>Widgets Tool</h2>
			{this.getView(this.state.currentAction)}
		</div>);
	}

};
