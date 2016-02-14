"use strict";

const
	React = require("react");

module.exports = class WidgetsTable extends React.Component {

	constructor(props) {
		super(props);
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
									<button>Edit</button>
									<button>View</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}

};
