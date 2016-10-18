/**
 * TextField.react.js
 *
 * Returns TextField from JSON 
 *
 */

import React, { Component} from 'react';
import { changeCode, logUser } from '../actions/AuthActions';

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
	render() {
		const props = this.props.config.props;
		const config = this.props.config.config;
		return(
			<div>
				<TextField
					floatingLabelText={props.title || ""}
					floatingLabelFixed={true}
					placeholder={props.helpText}
					multiLine={this.props.multiline}
					value={this.props.config.value}
					onChange={this.props.handle.bind(this)}
					type={config.type || "text"}
					name={props.title}
					id={this.props.unique + ''}
					key={this.props.unique}
					errorText={config.required ? 'This field is required' : false}
				/>
			</div>
		)
	}

}

// Specifies the default values for props:
Textfield.defaultProps = defaultProps;

// Specifies the type of value for props:
Textfield.propTypes = propTypes;


export default Textfield;