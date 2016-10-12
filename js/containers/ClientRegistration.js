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
import { getJSON } from '../actions/ClientRegistrationActions';
import CheckBox from '../components/Checkbox.react';
import Radiobutton from '../components/RadioButton.react';
import Textfield from '../components/TextField.react';


// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');

export default class ClientRegistration extends Component {

componentDidMount() {
	this.props.dispatch(getJSON());
}

	render() {
function inserter(value, key) {
  switch (value.type) {
    case 'checkboxes':
      return <CheckBox/>;
      break;
    case 'multipleChoices':
      return <Radiobutton/>
      break;
    case 'input':
      return <Textfield config={value} key={key}/>
      break;
    case 'textarea':
      return null//<Textfield multiline={true}/>
      break;
    default:
      return null;
  }
}

		const { items } = this.props.data.json;
		const fields = [];
		items.map((v, k) => {
			fields.push(inserter(v, k));
		});
		return (
			<div>
				<h1>Client Registration</h1>
				{fields}
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

// Wrap the component to inject dispatch and state into it
export default connect(select)(ClientRegistration);