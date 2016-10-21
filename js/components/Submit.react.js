/**
 * Submit.react.js
 *
 * Returns Submit button from JSON 
 *
 */

import React, { Component} from 'react';

// Material UI
import RaisedButton from 'material-ui/RaisedButton';

// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');
/**
 * Submit button field
 * @param  {string} hintText
 */

const propTypes = {
	config: React.PropTypes.object.isRequired,
}

class Submit extends Component {

	render() {
		const config = this.props.config;
		let button = '';
		switch (config.config.type) {
		    case '':
		      button = (<RaisedButton label={config.text}/>);
		      break;
		    case 'md-primary':
		      button = (<RaisedButton label={config.text} primary={true}/>);
		      break;
		    case 'md-warn':
		      button = (<RaisedButton label={config.text} secondary={true}/>);
		      break;
		    default:
		      return null;
		}

		return(
			<div>
				{button}
			</div>
		)
	}

}


// Specifies the type of value for props:
Submit.propTypes = propTypes;


export default Submit;