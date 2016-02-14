"use strict";

const
	objectAssign = require("object-assign"),
	React = require("react");

module.exports = class WidgetEdit extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			widget: objectAssign({}, this.props.widget)
		};

		this._onChange = this._onChange.bind(this);
		this._onSave = this._onSave.bind(this);
		this._onDelete = this._onDelete.bind(this);
		this._onReturnToList = this._onReturnToList.bind(this);
	}

	_onChange(e) {
		this.setState({
			widget: objectAssign(this.state.widget, {
				[e.target.name]: e.target.value
			})
		});
	}

	_onSave() {
		this.props.saveWidget(this.state.widget);
	}

	_onDelete() {
		this.props.deleteWidget(this.state.widget.id);
	}

	_onReturnToList() {
		this.props.returnToList();
	}

	render() {
		return (<section><form>
			<div>
				<h2>Edit Widget</h2>
			</div>
			<div>
				<label>
					Name
					<input type="text" name="name" onChange={this._onChange} value={this.state.widget.name} />
				</label>
			</div>
			<div>
				<label>
					Description
					<input type="text" name="description" onChange={this._onChange} value={this.state.widget.description} />
				</label>
			</div>
			<div>
				<label>
					Color
					<input type="text" name="color" onChange={this._onChange} value={this.state.widget.color} />
				</label>
			</div>
			<div>
				<label>
					Size
					<input type="text" name="size" onChange={this._onChange} value={this.state.widget.size} />
				</label>
			</div>
			<div>
				<label>
					Quantity
					<input type="text" name="quantity" onChange={this._onChange} value={this.state.widget.quantity} />
				</label>
			</div>
			<div>
				<button type="button" className="btn btn-primary" onClick={this._onSave}>Save</button>
				<button type="button" className="btn btn-danger" onClick={this._onDelete}>Delete</button>
				<button type="button" className="btn btn-default" onClick={this._onReturnToList}>Return to List</button>
			</div>
		</form></section>);
	}

};
