import React from 'react';
import { connect } from 'react-redux';
import { setActiveRecord, setEditMode, setAddMode } from '../actions/record_collection_actions';
import SearchBar from './SearchBar';

class RecordsList extends React.Component {
	constructor() {
		super();
		this.applyFilter = this.applyFilter.bind(this);
		this.state = {
			filter: ''
		};
	}

	applyFilter(val) {
		this.setState({ filter: val });
	}

	filterRecords(records) {
		if (!this.state.filter) {
			return records;
		}
		return records.filter((record) => {
			const name = `${record.artistName} ${record.recordTitle}`;
			return name.toLowerCase().includes(this.state.filter.toLowerCase()); // includes needs polyfill for IE
		});
	}

	handleKeyPress(e, id) {
		if (e.key === 'Enter') this.handleSetActive(id);
	}

	handleSetActive(id) {
		this.props.dispatch(setActiveRecord(id));
		this.props.dispatch(setEditMode(true));
		this.props.dispatch(setAddMode(false));
	}

	isActive(id) {
		return this.props.activeRecord === id;
	}

	sortRecords(records) {
		const compare = (a, b) => {
			const artistNameA = a.artistName.toLowerCase();
			const artistNameB = b.artistName.toLowerCase();

			if (artistNameA > artistNameB) return 1;
			if (artistNameA < artistNameB) return -1;
			return 0;
		};
		const sorted = [ ...records ].sort(compare);
		return sorted;
	}

	render() {
		return (
			<div>
				<SearchBar applyFilter={this.applyFilter} />
				{this.filterRecords(this.props.records).length < 1 ? (
					<p>No records to show</p>
				) : (
					<ul className="list-group">
						{this.filterRecords(this.props.records).map((record) => {
							return (
								<li
									tabIndex="0"
									key={record.id}
									onClick={() => this.handleSetActive(record.id)}
									onKeyPress={(e) => this.handleKeyPress(e, record.id)}
									style={{ cursor: 'pointer' }}
									className={this.isActive(record.id) ? 'list-group-item active' : 'list-group-item'}
								>
									<span>{`${record.artistName} - ${record.recordTitle}`}</span>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		);
	}
}

export default connect((state) => ({
	activeRecord: state.recordcollection.activeRecord,
	records: state.recordcollection.records
}))(RecordsList);
