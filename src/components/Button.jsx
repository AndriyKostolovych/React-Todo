import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return React.createElement(
  	"button", 
  	{className: props.className},
  	React.createElement(
  		"i", 
  		{className: "material-icons"},
  		props.icon));
};

Button.propTypes = {
	className: PropTypes.string.isRequired,
	icon: PropTypes.string
};

export default Button;