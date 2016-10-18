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
		const props = this.props.config.props;
		const config = this.props.config.config;
		const options = this.props.config.options;
		const checkboxes = [];
		if(options.length) {
			options.map((v, k) => {
				checkboxes.push(<Checkbox label={v.value}
										  checked={v.selected}
										  onCheck={this.props.handle.bind(this, k, this.props.unique, v.selected)} 
										  key={k}
								/>);
			})
		}

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