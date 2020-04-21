import React from 'react';
import { connect } from 'react-redux';
import RecordList from './RecordList';
import EditAddRecordContainer from './EditAddRecordContainer';
import AddRecordButton from './AddRecordButton';

class RecordCollectionPage extends React.Component {
	render() {
		return (
			<div className="app-container">
				<div>
					<div className="w-100 d-inline-flex justify-content-between">
						<h1>Record Collection</h1>
						<AddRecordButton />
					</div>
					<div className="w-100 d-inline-flex justify-content-between">
						<RecordList />
						<div className="edit-record-container">
							<EditAddRecordContainer />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect((state) => ({}))(RecordCollectionPage);
