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
	key: React.PropTypes.number,
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
				<span>{props.title}</span>
				<br/>
				<TextField
					floatingLabelText={props.helpText || ""}
					floatingLabelFixed={true}
					hintText={config.placeholder || ""}
					multiLine={this.props.multiline}
					type={config.type || "text"}
					key={this.props.key}
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