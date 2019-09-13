import React, { useState, useEffect } from 'react';

const EditRecordForm = (props) => {
	const [ artistName, setArtistName ] = useState(props.activeRecord.artistName);
	const [ recordTitle, setRecordTitle ] = useState(props.activeRecord.recordTitle);
	const [ id, setId ] = useState(props.activeRecord.id);

	const handleUpdate = (artistName, recordTitle) => {
		const record = { ...props.activeRecord, artistName: artistName, recordTitle: recordTitle };
		props.handleUpdateRecord(record);
	};

	useEffect(
		() => {
			setId(props.activeRecord.id);
			setArtistName(props.activeRecord.artistName);
			setRecordTitle(props.activeRecord.recordTitle);
		},
		[ id, props.activeRecord ]
	);

	return (
		<div>
			<form>
				<label htmlFor="artistName">Artist name</label>
				<input
					className="form-control"
					type="text"
					name="artistName"
					id="artistName"
					size="30"
					onChange={(e) => setArtistName(e.target.value)}
					value={artistName}
				/>
				<label htmlFor="recordTitle">Record title</label>
				<input
					className="form-control"
					type="text"
					name="recordTitle"
					id="recordTitle"
					size="30"
					onChange={(e) => setRecordTitle(e.target.value)}
					value={recordTitle}
				/>
				<div className="my-3">
					<button
						className="btn btn-outline-success mr-3"
						onClick={() => handleUpdate(artistName, recordTitle)}
					>
						Save
					</button>
					<button
						className="btn btn-outline-danger"
						onClick={() => props.handleDelete(props.activeRecord.id)}
					>
						Delete
					</button>
					<button className="btn btn-outline-dark float-right" onClick={() => props.handleCancel()}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditRecordForm;
