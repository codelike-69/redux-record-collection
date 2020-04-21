import React from 'react';

const AddRecordForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const artistName = e.target[0].value;
		const recordTitle = e.target[1].value;
		if (!artistName || !recordTitle) return;
		const record = {
			artistName,
			recordTitle,
			id: Date.now() + Math.random()
		};
		props.handleAddRecord(record);
	};
	return (
		<div className="form-group">
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="artistName">Artist name</label>
				<input className="form-control" type="text" name="artistName" id="artistName" size="30" />
				<label htmlFor="recordTitle">Record title</label>
				<input className="form-control" type="text" name="recordTitle" id="recordTitle" size="30" />
				<div className="my-3">
					<button className="btn btn-outline-success mr-3" type="submit">
						Save
					</button>
					<button className="btn btn-outline-dark" onClick={() => props.handleCancel()}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddRecordForm;
