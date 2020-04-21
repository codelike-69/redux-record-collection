import React from 'react';
import { connect } from 'react-redux';
import { setEditMode, setActiveRecord, setAddMode } from '../actions/recordCollectionActions';

class AddRecordButton extends React.Component {
	handleAddRecord() {
		this.props.dispatch(setEditMode(false));
		this.props.dispatch(setAddMode(true));
		this.props.dispatch(setActiveRecord(null));
	}
	render() {
		return (
			<button type="button" className="btn btn-outline-dark ml-4" onClick={() => this.handleAddRecord()}>
				Add record
			</button>
		);
	}
}

export default connect(() => ({}))(AddRecordButton);
