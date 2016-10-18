/*
 * ClientRegistration
 *
 * Clients do registration to current event
 * Container receive JSON data with fields and values
 * Route: /registration
 *
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getJSON, changeTextField, changeCheckbox } from '../actions/ClientRegistrationActions';
import CheckBox from '../components/Checkbox.react';
import Radiobutton from '../components/RadioButton.react';
import Textfield from '../components/TextField.react';
import { Field, reduxForm } from 'redux-form';


// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');

export default class ClientRegistration extends Component {

	componentDidMount() {
		this.props.dispatch(getJSON());
	}

	render() {

//////////////////////////////////
// # Set initial state
//////////////////////////////////
		const fields = [];
		const dispatch = this.props.dispatch;
		const { items } = this.props.data.json;

//////////////////////////////////
// # Handle change to text fields
//////////////////////////////////

		// set controller object for text fields
		const textFieldCtrl = {};

		// Merges the current state with a change
		textFieldCtrl._mergeWithCurrentState = function(change) {
			let currentItem = assign({}, items[change.key], {value: change.value});
			return [
				...items.slice(0, change.key),
				currentItem,
				...items.slice(change.key +1)
			];
		}

		// Handle input change of text field
		textFieldCtrl.handleChange = function(evt) {
			let newState = textFieldCtrl._mergeWithCurrentState({
				key: this.props.unique, 
				value: evt.target.value
			})

			textFieldCtrl._emitChange(newState)
		}

		// Emits a change of the form state to the application state
		textFieldCtrl._emitChange = function(newState) {
			dispatch(changeTextField(newState))
		}

//////////////////////////////////
// # Handle change to checkboxes
//////////////////////////////////

		// set controller object for checkboxes
		const checkboxFieldCtrl = {};

		// Merges the current state with a change
		checkboxFieldCtrl._mergeWithCurrentState = function(change) {
			let currentOption = [
				...items[change.key].options.slice(0, change.option),
				assign({}, items[change.key].options[change.option], {selected: !change.value}),
				...items[change.key].options.slice(change.option +1)
			];
			let currentItem = assign({}, items[change.key], {options: currentOption});
			return [
				...items.slice(0, change.key),
				currentItem,
				...items.slice(change.key +1)
			]
		}

		// Hadle checkbox change
		checkboxFieldCtrl.handleChange = function(option, key, value) {
			let newState = checkboxFieldCtrl._mergeWithCurrentState({
				key,
				option,
				value
			})

			checkboxFieldCtrl._emitChange(newState);
		}

		// Emits a change of the form state to the application state
		checkboxFieldCtrl._emitChange = function(newState) {
			dispatch(changeCheckbox(newState))
		}


		function inserter(value, key) {
		  switch (value.type) {
		    case 'checkboxes':
		      return <CheckBox config={value} key={key} unique={key} handle={checkboxFieldCtrl.handleChange}/>;
		      break;
		    case 'multipleChoices':
		      return <Radiobutton config={value} key={key} unique={key}/>
		      break;
		    case 'input':
		      return <Textfield config={value} key={key} unique={key} handle={textFieldCtrl.handleChange}/>
		      break;
		    case 'textarea':
		      return <Textfield config={value} key={key} unique={key} handle={textFieldCtrl.handleChange} multiline={true}/>
		      break;
		    default:
		      return null;
		  }
		}

		items.map((v, k) => {
			fields.push(inserter(v, k));
		});

		return (
			<div>
				<h1>Client Registration</h1>
				<form>
					{fields}
				</form>
			</div>
		)
	}
}

// Which props do we want to inject, given the global state?
function select(state) {
	return {
		data: state
	};
}

// Decorate the form component
ClientRegistration = reduxForm({
  form: 'contact' // a unique name for this form
})(ClientRegistration);

// Wrap the component to inject dispatch and state into it
export default connect(select)(ClientRegistration);