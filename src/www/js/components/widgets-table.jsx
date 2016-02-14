"use strict";

const
	React = require("react");

module.exports = class WidgetsTable extends React.Component {

	constructor(props) {
		super(props);

		this._onEditWidget = this._onEditWidget.bind(this);
		this._onViewWidget = this._onViewWidget.bind(this);
		this._onCreateWidget = this._onCreateWidget.bind(this);
	}

	_onEditWidget(e) {
		this.props.editWidget(this._parseWidgetId(e));
	}

	_onViewWidget(e) {
		this.props.viewWidget(this._parseWidgetId(e));
	}

	_onCreateWidget() {
		this.props.editWidget();
	}

	_parseWidgetId(e) {
		return parseInt(e.target.getAttribute("data-widget-id"), 10);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.widgets !== this.props.widgets;
	}

	render() {
		return (<section>
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
									<button className="btn btn-link" data-widget-id={widget.id} onClick={this._onEditWidget}>Edit</button>
									<button className="btn btn-link" data-widget-id={widget.id} onClick={this._onViewWidget}>View</button>
								</td>
							</tr>
						);
					}.bind(this))}
				</tbody>
			</table>
			<button className="btn btn-primary" onClick={this._onCreateWidget}>Create Widget</button>
		</section>);
	}

};
