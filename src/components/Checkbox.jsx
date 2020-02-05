import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
	constructor(props){
		super(props);
		this.state={
			checked: this.props.initiallyChecked
		};
		this.handelClick = this.handelClick.bind(this);

	}

handelClick(event){
	this.setState({
		checked: !this.state.checked
	});
}

  render() {
  	return(
  			<button className= "checkbox icon" onClick={this.handelClick}>
  				<i className= "material-icons">{this.state.checked ? 'check_box' : 
  				'check_box_outline_blank'}</i>
  			</button>
  	);
  }
}

Checkbox.propTypes = {
	initiallyChecked: PropTypes.bool.isRequired
}

export default Checkbox;