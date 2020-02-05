import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return React.createElement("header", null, React.createElement("h1", null, props.title));
};

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;

