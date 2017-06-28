'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookingForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="form-horizontal">
				<fieldset>
					<div className="form-group">
						<div className="col-lg-6">
							<label htmlFor="inputCruise">Cruise</label>	
							<input type="text" className="form-control" id="inputCruise" placeholder={this.props.match.params.cruise ? this.props.match.params.cruise : ''} />
						</div>
					</div>
				</fieldset>
			</form>
		);
	}
	
}

BookingForm.propTypes = {
	match: PropTypes.object	
};

export default BookingForm;