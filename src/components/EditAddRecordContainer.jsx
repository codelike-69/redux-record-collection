import React from 'react';
import { connect } from 'react-redux';
import { setEditMode, addRecord, deleteRecord, updateRecord, setAddMode } from '../actions/recordCollectionActions';
import EditRecordForm from './EditRecordForm';
import AddRecordForm from './AddRecordForm';

class EditAddRecordContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeRecord: this.props.records.find((record) => {
				return record.id === this.props.activeRecord;
			})
		};
		this.handleAddRecord = this.handleAddRecord.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdateRecord = this.handleUpdateRecord.bind(this);
	}

	componentDidMount() {}

	componentDidUpdate() {
		if (!this.props.activeRecord) return;
		if (!this.state.activeRecord || this.state.activeRecord.id !== this.props.activeRecord) {
			this.setState({
				activeRecord: this.props.records.find((record) => {
					return record.id === this.props.activeRecord;
				})
			});
		}
	}

	handleAddRecord(record) {
		this.props.dispatch(addRecord(record));
		this.props.dispatch(setAddMode(false));
	}

	handleCancel() {
		this.props.dispatch(setAddMode(false));
		this.props.dispatch(setEditMode(false));
	}

	handleDelete(activeRecordId) {
		this.props.dispatch(setEditMode(false));
		this.props.dispatch(deleteRecord(activeRecordId));
	}

	handleUpdateRecord(record) {
		this.props.dispatch(updateRecord(record));
		this.props.dispatch(setEditMode(false));
	}

	render() {
		return (
			<div>
				{this.props.isAdding &&
				!this.props.activeRecord && (
					<AddRecordForm handleAddRecord={this.handleAddRecord} handleCancel={this.handleCancel} />
				)}
				{this.props.isEditing &&
				this.state.activeRecord && (
					<EditRecordForm
						handleCancel={this.handleCancel}
						handleDelete={this.handleDelete}
						handleUpdateRecord={this.handleUpdateRecord}
						activeRecord={this.state.activeRecord}
					/>
				)}
			</div>
		);
	}
}

export default connect((state) => ({
	activeRecord: state.recordcollection.activeRecord,
	records: state.recordcollection.records,
	isEditing: state.recordcollection.isEditing,
	isAdding: state.recordcollection.isAdding
}))(EditAddRecordContainer);
