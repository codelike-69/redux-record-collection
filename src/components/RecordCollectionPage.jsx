import React from 'react';
import { connect } from 'react-redux';
import RecordsList from './RecordsList';
import EditRecordContainer from './EditRecordContainer';
import AddNewRecord from './AddNewRecord';

class RecordCollectionPage extends React.Component {
	render() {
		return (
			<div className="app-container">
				<div>
					<div className="w-100 d-inline-flex justify-content-between">
						<h1>Record Collection</h1>
						<AddNewRecord />
					</div>
					<div className="w-100 d-inline-flex justify-content-between">
						<RecordsList />
						<div className="edit-record-container">
							<EditRecordContainer />
						</div>
					</div>
				</div>
				{/* <div className="edit-record-container">
					<EditRecordContainer />
				</div> */}
			</div>
		);
	}
}

export default connect((state) => ({}))(RecordCollectionPage);
