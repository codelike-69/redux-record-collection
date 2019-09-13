import React from 'react';

const SearchBar = (props) => {
	return (
		<div className="my-3">
			<label className="sr-only" htmlFor="SearchBar">
				Search
			</label>
			<input
				type="text"
				name="SearchBar"
				id="SearchBar"
				className="search-box"
				placeholder="Search"
				onChange={(e) => props.applyFilter(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
