import {
	SET_ACTIVE_RECORD,
	ADD_RECORD,
	SET_EDIT_MODE,
	SET_ADD_MODE,
	DELETE_RECORD,
	UPDATE_RECORD
} from '../constants/action_types';

export function setActiveRecord(id) {
	return {
		type: SET_ACTIVE_RECORD,
		payload: id
	};
}

export function addRecord(record) {
	return {
		type: ADD_RECORD,
		payload: record
	};
}

export function setEditMode(isEditing) {
	return {
		type: SET_EDIT_MODE,
		payload: isEditing
	};
}

export function setAddMode(isAdding) {
	return {
		type: SET_ADD_MODE,
		payload: isAdding
	};
}

export function deleteRecord(id) {
	return {
		type: DELETE_RECORD,
		payload: id
	};
}

export function updateRecord(record) {
	return {
		type: UPDATE_RECORD,
		payload: record
	};
}
