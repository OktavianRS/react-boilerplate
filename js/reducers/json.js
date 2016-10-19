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

import { SET_JSON, CHANGE_TEXT_FIELD, CHANGE_CHECKBOX } from '../constants/ClientRegistrationConstants';
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');

// The initial application state
const initialState = {
    items: [],
    initialValues: {},
    requiredFields: [],
};

// Takes care of changing the application state
export default function json(state = initialState, action) {
  switch (action.type) {
    case SET_JSON:
      return assign({}, state, {
        items: action.newState.json
      }, {requiredFields: action.newState.requiredFields});
      break;
    case CHANGE_TEXT_FIELD:
      return assign({}, state, {
        items: action.newState
      });
      break;
    case CHANGE_CHECKBOX:
      return assign({}, state, {
        items: action.newState
      });
      break;
    default:
      return state;
  }
}
