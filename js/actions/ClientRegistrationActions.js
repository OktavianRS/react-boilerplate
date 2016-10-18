
/*
 * Client Registration page Actions
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 * 3) (optional) Add an async function like this:
 *    export function asyncYourAction(var) {
 *        return function(dispatch) {
 *             // Do async stuff here
 *             return dispatch(yourAction(var));
 *        }
 *    }
 *
 *    If you add an async function, remove the export from the function
 *    created in the second step
 */

import { 
	GET_JSON,
	SET_JSON,
	CHANGE_TEXT_FIELD,
	CHANGE_CHECKBOX,
	} from '../constants/ClientRegistrationConstants';
import { browserHistory } from 'react-router';
import axios from 'axios';

/**
 * Get JSON of roles from server
 */
export function getJSON() {
	return dispatch =>
		dispatch(fetchJSON());
}

function fetchJSON() {
	return dispatch =>
		// Send a get request
		axios({
			method: 'get',
			baseURL: 'http://event.vt-host.co.ua/backend/api/web/v1/',
			url: 'role/get-role-step',
			params: {
				'access-token':'TEwtPm93xEYW2WNnvsYmrrDvZbnBZZcg',
				id: 11,
			}
		})
		.then(function (response) {
			dispatch(receiveJSON(response.data.items));
		})
		.catch(err => { throw err; });
}

function receiveJSON(json) {
  return {
    type: SET_JSON,
    newState: json,
  };
}

/**
 * Sets the TextField state
 * @param  {object} newState The new state of the code
 * @param  {string} newState.value The new text of the input field
 * @param  {string} newState.key The key of the input field
 */
export function changeTextField(newState) {
  return { type: CHANGE_TEXT_FIELD, newState };
}

/**
 * Sets the Checkbox state
 * @param  {object} newState The new state of the code
 * @param  {string} newState.value The new text of the input field
 * @param  {string} newState.key The key of the input field
 */
export function changeCheckbox(newState) {
	return { type: CHANGE_CHECKBOX, newState };
}