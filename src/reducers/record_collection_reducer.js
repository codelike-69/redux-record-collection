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
	records: [
		{
			artistName: 'Joy Division',
			recordTitle: 'Closer',
			id: 1
		},
		{
			artistName: 'Current 93',
			recordTitle: 'The Inmost Light',
			id: 2
		},
		{
			artistName: 'Scott Walker',
			recordTitle: 'IV',
			id: 3
		},
		{
			artistName: 'New Order',
			recordTitle: 'Power, Corruption and Lies',
			id: 4
		},
		{
			artistName: 'Derniere Volonte',
			recordTitle: 'Devant le Miroir',
			id: 5
		}
	],
	isEditing: false,
	isAdding: false
};

export default (state = defaultState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_ACTIVE_RECORD:
			return Object.assign({}, state, {
				activeRecord: payload
			});
		case ADD_RECORD:
			return Object.assign({}, state, {
				records: [ ...state.records, payload ]
			});
		case SET_EDIT_MODE:
			return Object.assign({}, state, {
				isEditing: payload
			});
		case SET_ADD_MODE:
			return Object.assign({}, state, {
				isAdding: payload
			});
		case DELETE_RECORD:
			return Object.assign({}, state, {
				records: state.records.filter((record) => {
					return record.id !== payload;
				})
			});
		case UPDATE_RECORD:
			return Object.assign({}, state, {
				records: state.records.map((record) => {
					if (record.id === payload.id) {
						record.artistName = payload.artistName;
						record.recordTitle = payload.recordTitle;
					}
					return record;
				})
			});

		default:
			return state;
	}
};
