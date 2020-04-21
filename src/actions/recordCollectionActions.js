import {
	SET_ACTIVE_RECORD,
	ADD_RECORD,
	SET_EDIT_MODE,
	SET_ADD_MODE,
	DELETE_RECORD,
	UPDATE_RECORD
} from '../constants/action_types';

export const setActiveRecord = (id) => {
	return {
		type: SET_ACTIVE_RECORD,
		payload: id
	};
};

export const addRecord = (record) => {
	return {
		type: ADD_RECORD,
		payload: record
	};
};

export const setEditMode = (isEditing) => {
	return {
		type: SET_EDIT_MODE,
		payload: isEditing
	};
};

export const setAddMode = (isAdding) => {
	return {
		type: SET_ADD_MODE,
		payload: isAdding
	};
};

export const deleteRecord = (id) => {
	return {
		type: DELETE_RECORD,
		payload: id
	};
};

export const updateRecord = (record) => {
	return {
		type: UPDATE_RECORD,
		payload: record
	};
};
