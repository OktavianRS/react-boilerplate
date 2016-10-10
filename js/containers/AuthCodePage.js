/*
 * AuthCodePage
 *
 * Users inserts auth code on this page
 * Route: /auth
 *
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import { changeCode, logUser } from '../actions/AuthActions';

// components
import BigLogo from '../components/BigLogo.react';

// Material ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');


export default class AuthCodePage extends Component {
	render() {

		// Auth state
		const { authForm } = this.props.data;

		// css
		const style = {
			helpText: {
				'textAlign': 'center'
			}
		}

		return(
			<div>
				<BigLogo path="./img/BigLogoImg.png" maxHeight={250}></BigLogo>
				<h3 style={style.helpText}>Insert your unique code that were sent on mail</h3>
				<form onSubmit={this._onSubmit.bind(this)}>
					<TextField hintText="Your code"
							   fullWidth={true}
							   value={authForm.code}
							   onChange={this._changeCode.bind(this)}/>
					<RaisedButton label="Submit" type="submit" primary={true} />
				</form>
			</div>
		)
	}

	// Merges the current state with a change
	_mergeWithCurrentState(change) {
		return assign(this.props.data.authForm, change);
	}

	// Change the code value in the app state
	_changeCode(evt) {
		var newState = this._mergeWithCurrentState({
		  code: evt.target.value
		});

		this._emitChange(newState);
	}


	// Emits a change of the form state to the application state
	_emitChange(newState) {
		this.props.dispatch(changeCode(newState));
	}

	// Sends auth code and logs in user
	_onSubmit(evt) {
		evt.preventDefault();
		this.props.dispatch(logUser(this.props.data.code));
	}

} // end of class

// Which props do we want to inject, given the global state?
function select(state) {
	return {
		data: state
	};
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AuthCodePage);