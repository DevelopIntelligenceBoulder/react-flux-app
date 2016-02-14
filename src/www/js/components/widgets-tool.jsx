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

		this._editWidget = this._editWidget.bind(this);
		this._viewWidget = this._viewWidget.bind(this);
	}

	_prepareState(action, widgetId) {
		return function(previousState, currentProps) {
			return {
				currentAction: action,
				currentWidgetId: widgetId
			};
		};
	}

	_editWidget(widgetId) {
		this.setState(this._prepareState("edit", widgetId));
	}

	_viewWidget(widgetId) {
		this.setState(this._prepareState("view", widgetId));
	}

	_getWidget(widgetId) {
		return this.state.widgets.filter(function(widget) {
			return widget.id === this.state.currentWidgetId;
		}.bind(this))[0];
	}

	_getView(action) {
		switch (action) {
			case "view":
				return <WidgetView widget={this._getWidget(this.state.widgetId)} />;
			case "edit":
				return <WidgetEdit widget={this._getWidget(this.state.widgetId)} />;
			default:
				return <WidgetsTable widgets={this.state.widgets} editWidget={this._editWidget} viewWidget={this._viewWidget} />;
		}
	}

	render() {
		return (<div>
			<h2>Widgets Tool</h2>
			{this._getView(this.state.currentAction)}
		</div>);
	}

};
