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
import Submit from '../components/Submit.react';
import { reduxForm } from 'redux-form';


// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');

var initialValues = {};
var requiredFields = [];

const validate = values => {
  const errors = {}
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

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
		    case 'submit':
		      return <Submit config={value} key={key}/>
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
	requiredFields = state.json.requiredFields;
	state.json.items.map((v, k) => {
		if(v.props.title && v.value) {
			initialValues[v.props.name] = v.value;
		}
	})

	return {
		data: state,
		initialValues,
	};

}

// Decorate the form component
ClientRegistration = reduxForm({
  form: 'registration', // a unique name for this form
  validate
},{
	enableReinitialize: true
}
)(ClientRegistration);



// Wrap the component to inject dispatch and state into it
export default connect(select)(ClientRegistration);