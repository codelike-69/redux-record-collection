import {
	SET_ACTIVE_RECORD,
	ADD_RECORD,
	SET_EDIT_MODE,
	SET_ADD_MODE,
	DELETE_RECORD,
	UPDATE_RECORD
} from '../constants/action_types';

// example data
const defaultState = {
	activeRecord: null,
	records: [],
	isEditing: false,
	isAdding: false
};

export default (state = defaultState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_ACTIVE_RECORD:
			return {
				...state,
				activeRecord: payload
			};
		case ADD_RECORD:
			return {
				...state,
				records: [ ...state.records, payload ]
			};
		case SET_EDIT_MODE:
			return { ...state, isEditing: payload };
		case SET_ADD_MODE:
			return {
				...state,
				isAdding: payload
			};
		case DELETE_RECORD:
			return {
				...state,
				records: state.records.filter((record) => {
					return record.id !== payload;
				})
			};
		case UPDATE_RECORD:
			return {
				...state,
				records: state.records.map((record) => {
					if (record.id === payload.id) {
						record.artistName = payload.artistName;
						record.recordTitle = payload.recordTitle;
					}
					return record;
				})
			};

		default:
			return state;
	}
};
