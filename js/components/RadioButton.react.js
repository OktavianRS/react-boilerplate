/**
 * RadioButton.react.js
 *
 * Returns RadioButton from JSON 
 *
 */

import React, { Component} from 'react';
import { Field } from 'redux-form';

// Material UI
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

/**
 * RadioButton field
 * @param  {string} hintText
 */


class Radiobutton extends Component {

	renderRadioGroup ({ input, ...rest }) {
		return (
		  <RadioButtonGroup {...input} {...rest}
		    valueSelected={input.value}
		    onChange={(event, value) => input.onChange(value)}/>
		)
	}
	render() {
		const props = this.props.config.props;
		const config = this.props.config.config;
		const options = this.props.config.options;
		let buttons = [];
		options.map((v,k) => {
			buttons.push(<RadioButton key={k} value={v.value} label={v.value}/>)
		})
		return(
			<div>
				<div className="lable-text">{props.title}</div>
				<span className="hint-text">{props.helpText}</span>
				<Field name={props.title} value={this.props.config.value} component={this.renderRadioGroup}>
					{buttons}
				</Field>
			</div>
		)
	}
}


export default Radiobutton;