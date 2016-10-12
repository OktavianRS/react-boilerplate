/**
 * Checkbox.react.js
 *
 * Returns Checkbox from JSON 
 *
 */

import React, { Component} from 'react';

// Material UI
import Checkbox from 'material-ui/Checkbox';

/**
 * Checkbox field
 * @param  {string} hintText
 */


class CheckBox extends Component {
	render() {
		return(
			<div>
				<Checkbox
					label="Simple"
				/>
			</div>
		)
	}
}


export default CheckBox;