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
import { reduxForm } from 'redux-form';


// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');

export default class ClientRegistration extends Component {

	componentWillMount() {
		this.props.dispatch(getJSON());
	}

	render() {

//////////////////////////////////
// # Set initial state
//////////////////////////////////
		const fields = [];
		const dispatch = this.props.dispatch;
		const { items } = this.props.data.json;


		function inserter(value, key) {
		  switch (value.type) {
		    case 'checkboxes':
		      return <CheckBox config={value} key={key}/>;
		      break;
		    case 'multipleChoices':
		      return <Radiobutton config={value} key={key}/>
		      break;
		    case 'input':
		      return <Textfield config={value} key={key}/>
		      break;
		    case 'textarea':
		      return <Textfield config={value} key={key} multiline={true}/>
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
	let initialValues = {Title: 'values'};
	state.json.items.map((v, k) => {
		initialValues[v.props.title] = v.value;
	})
	console.log(this);
	return {
		data: state,
		initialValues,
	};
}

// Decorate the form component
ClientRegistration = reduxForm({
  form: 'registration' // a unique name for this form
})(ClientRegistration);



// Wrap the component to inject dispatch and state into it
export default connect(select)(ClientRegistration);