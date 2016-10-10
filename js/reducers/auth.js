/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import { CHANGE_CODE, LOG_USER, RECEIVE_ACCESS_TOKEN } from '../constants/AuthConstants';
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');

// The initial application state
const initialState = {
  authForm: {
    code: ''
  },
  accessToken: null
};

// Takes care of changing the application state
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CODE:
      return assign({}, state, {
        authForm: action.newState
      });
      break;
      case RECEIVE_ACCESS_TOKEN:
        return Object.assign({}, state, {
          accessToken: action.accessToken,
        });
    default:
      return state;
  }
}
