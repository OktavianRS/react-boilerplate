/**
 * BigLogo.react.js
 *
 * Big image with logo of company
 * Path to img ./img/BigLogoImg.img
 *
 */

import React, { Component} from 'react';

/**
 * Big logo image
 * @param  {string} Path to image
 * @return {number} max-height css param in pixels
 */

const propTypes = {
	maxHeight: React.PropTypes.number,
	path: React.PropTypes.string.isRequired,
}

const defaultProps = {
	maxHeight: 230,
}

class BigLogo extends Component {
	render() {
		const imgStyle = {
			'maxHeight': this.props.maxHeight
		};
		return(
			<img src={this.props.path} style={imgStyle} alt="Logo of the company"/>
		)
	}
}

// Specifies the default values for props:
BigLogo.defaultProps = defaultProps;

// Specifies the type of value for props:
BigLogo.propTypes = propTypes;

export default BigLogo;