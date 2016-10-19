/**
 * TextField.react.js
 *
 * Returns TextField from JSON 
 *
 */

import React, { Component} from 'react';
import { changeCode, logUser } from '../actions/AuthActions';
import { Field } from 'redux-form';

// Material UI
import TextField from 'material-ui/TextField';

// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');
/**
 * RadioButton field
 * @param  {string} hintText
 */

const propTypes = {
	multiline: React.PropTypes.bool,
	key: React.PropTypes.number
}

const defaultProps = {
	multiline: false,
}

class Textfield extends Component {

	renderTextField ({ input, label, meta: { touched, error }, ...custom }) {
		let props = custom.config.props;
		let config = custom.config.config;
		return (
			<TextField hintText={props.helpText}
				floatingLabelText={props.title}
				type={config.type}
				multiLine={custom.multiline || false}
				errorText={touched && error}
				{...input}
			/>
		)
	}

	render() {
		const config = this.props.config;

		return(
			<div>
				<Field 
					 name={config.props.title}
					 multiline={this.props.multiline} 
					 config={config} 
					 component={this.renderTextField}/>
			</div>
		)
	}

}

// Specifies the default values for props:
Textfield.defaultProps = defaultProps;

// Specifies the type of value for props:
Textfield.propTypes = propTypes;


export default Textfield;