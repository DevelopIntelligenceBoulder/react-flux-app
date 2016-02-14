"use strict";

const
	React = require("react");

module.exports = class WidgetsTable extends React.Component {

	constructor(props) {
		super(props);
		this._editWidget = this._editWidget.bind(this);
		this._viewWidget = this._viewWidget.bind(this);
	}

	_editWidget(e) {
		this.props.editWidget(this._parseWidgetId(e));
	}

	_viewWidget(e) {
		this.props.viewWidget(this._parseWidgetId(e));
	}

	_parseWidgetId(e) {
		return parseInt(e.target.getAttribute("data-widget-id"), 10);
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Color</th>
						<th>Size</th>
						<th>Quantity</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{this.props.widgets.map(function(widget) {
						return (
							<tr key={widget.id}>
								<td>{widget.name}</td>
								<td>{widget.color}</td>
								<td>{widget.size}</td>
								<td>{widget.quantity}</td>
								<td>
									<button data-widget-id={widget.id} onClick={this._editWidget}>Edit</button>
									<button data-widget-id={widget.id} onClick={this._viewWidget}>View</button>
								</td>
							</tr>
						);
					}.bind(this))}
				</tbody>
			</table>
		);
	}

};
