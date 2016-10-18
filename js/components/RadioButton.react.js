/**
 * RadioButton.react.js
 *
 * Returns RadioButton from JSON 
 *
 */

import React, { Component} from 'react';

// Material UI
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

/**
 * RadioButton field
 * @param  {string} hintText
 */


class Radiobutton extends Component {
	render() {
		const props = this.props.config.props;
		const config = this.props.config.config;
		const options = this.props.config.options;
		const radiobuttons = [];
		if(options.length) {
			options.map((v, k) => {
				radiobuttons.push(<RadioButton
										key={k}
										label={v.value}
								/>);
			})
		}
		return(
			<div>
				<div className="lable-text">{props.title}</div>
				<span className="hint-text">{props.helpText}</span>
				<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
					{radiobuttons}
				</RadioButtonGroup>
			</div>
		)
	}
}


export default Radiobutton;