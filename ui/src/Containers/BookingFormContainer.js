import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookingForm from '../Components/BookingForm/BookingForm';


class BookingFormContainer extends Component {
	constructor() {
		super();

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e) {
		console.log(e);
	}

	render() {
		return (
			<BookingForm 
				match={this.props.match}
				onFormSubmit={this.onFormSubmit}			
			/>
		);
	}

}

function mapStateToProps(state, ownProps){
	return {
		cruise: state.cruise
	};
}

BookingFormContainer.propTypes = {
	match: PropTypes.object	
};


export default connect(mapStateToProps)(BookingFormContainer);