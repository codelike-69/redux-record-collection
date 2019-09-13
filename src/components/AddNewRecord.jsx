import React from 'react';
import { connect } from 'react-redux';
import { setEditMode, setActiveRecord, setAddMode } from '../actions/record_collection_actions';

class AddNewRecord extends React.Component {
	handleAddRecord() {
		this.props.dispatch(setEditMode(false));
		this.props.dispatch(setAddMode(true));
		this.props.dispatch(setActiveRecord(null));
	}
	render() {
		return (
			<button type="add" className="btn btn-outline-dark ml-4" onClick={() => this.handleAddRecord()}>
				Add record
			</button>
		);
	}
}

export default connect(() => ({}))(AddNewRecord);
