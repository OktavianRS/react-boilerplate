
/*
 * Auth Code Page Actions
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
	CHANGE_CODE,
	LOG_USER,
	RECEIVE_ACCESS_TOKEN
	} from '../constants/AuthConstants';
import { browserHistory } from 'react-router';
import axios from 'axios';

/**
 * Sets the code state
 * @param  {object} newState          The new state of the code
 * @param  {string} newState.code The new text of the code input field of the form
 * @return {object}                   Formatted action for the reducer to handle
 */
export function changeCode(newState) {
  return { type: CHANGE_CODE, newState };
}

/**
 * Sets the user state
 * Log user 
 * @param  {object} code auth user
 */
export function logUser(code) {
	return dispatch =>
		dispatch(fetchAuthedUser(code));
}

/**
 * Send request to login user
 * Log user 
 * @param  {object} authToken
 */
function fetchAuthedUser(authToken) {
	return dispatch =>
		axios.get('/user?ID=12345')
		  .then(function (response) {
		    dispatch(receiveAccessToken(response));
		    dispatch(storeSession(response));
		  })
		  .catch(function (error) {
		    dispatch(receiveAccessToken(null));
		    dispatch(storeSession(null));
		  });
}

/**
 * Stores user auth token
 * Store user 
 * @param  {object} authToken
 */
function receiveAccessToken(accessToken) {
  return {
    type: RECEIVE_ACCESS_TOKEN,
    accessToken,
  };
}

/**
 * Stores user auth token in localstorage
 * Store user in localstorage
 * @param  {object} authToken
 */
function storeSession(accessToken) {
	localStorage.token = JSON.stringify(accessToken);
}
