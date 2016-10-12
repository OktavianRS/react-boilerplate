
// index
// Combine all reducers

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from '../reducers/auth';
import json from '../reducers/json';

const rootReducer = combineReducers({
	auth,
	json,
	form: formReducer,
});

export default rootReducer;