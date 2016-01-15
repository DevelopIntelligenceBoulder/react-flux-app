(function () {

	"use strict";

	var widgets = [{ name: "Widget 1", color: "blue", size: "small", qty: 10 }, { name: "Widget 2", color: "red", size: "large", qty: 20 }, { name: "Widget 3", color: "green", size: "medium", qty: 15 }];

	var WidgetTable = React.createClass({
		render: function () {

			var widgetRows = this.props.widgets.map(function (widget) {
				return React.createElement(WidgetRow, { widget: widget });
			});

			return React.createElement(
				"table",
				{ className: "table table-striped" },
				React.createElement(
					"thead",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							null,
							"Name"
						),
						React.createElement(
							"th",
							null,
							"Color"
						),
						React.createElement(
							"th",
							null,
							"Size"
						),
						React.createElement(
							"th",
							null,
							"Qty"
						)
					)
				),
				React.createElement(
					"tbody",
					null,
					widgetRows
				)
			);
		}

	});

	var WidgetRow = React.createClass({
		render: function () {
			return React.createElement(
				"tr",
				null,
				React.createElement(
					"td",
					null,
					this.props.widget.name
				),
				React.createElement(
					"td",
					null,
					this.props.widget.color
				),
				React.createElement(
					"td",
					null,
					this.props.widget.size
				),
				React.createElement(
					"td",
					null,
					this.props.widget.qty
				)
			);
		}
	});

	var mainElement = document.querySelector("main");

	ReactDOM.render(React.createElement(WidgetTable, { widgets: widgets }), mainElement);

	ReactDOM.render(React.createElement(WidgetTable, { widgets: widgets }), mainElement);
})();