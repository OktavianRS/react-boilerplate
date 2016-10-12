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
		return(
			<div>
				<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
					<RadioButton
						value="light"
						label="Simple"
					/>
				</RadioButtonGroup>
			</div>
		)
	}
}


export default Radiobutton;