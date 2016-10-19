/**
 * Checkbox.react.js
 *
 * Returns Checkbox from JSON 
 *
 */

import React, { Component} from 'react';
import { Field } from 'redux-form';

// Material UI
import Checkbox from 'material-ui/Checkbox';

/**
 * Checkbox field
 * @param  {string} hintText
 */


class CheckBox extends Component {

renderCheckbox ({ input, label, ...custom }) {
	console.log(input);
	return(
		<Checkbox label={label}
			checked={input.value ? true : false}
			/>
	)
}

	render() {
		const props = this.props.config.props;
		const config = this.props.config.config;
		const options = this.props.config.options;
		const checkboxes = [];
		console.log(this.props.config);
		options.map((v,k) => {
			checkboxes.push(<Field name={v.value} key={k} component={this.renderCheckbox} label={v.value}/>)
		})

		return(
			<div>
				<div className="lable-text">{props.title}</div>
				<span className="hint-text">{props.helpText}</span>
				<br/><br/>
				{checkboxes}
			</div>
		)
	}
}


export default CheckBox;