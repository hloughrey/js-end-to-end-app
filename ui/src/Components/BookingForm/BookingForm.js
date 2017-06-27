'use strict';
import React from 'react';
import PropTypes from 'prop-types';

const BookingForm =  ({ match }) => {
	return (
		<form className="form-horizontal">
			<fieldset>
				<div className="form-group">
					<div className="col-lg-6">
						<label htmlFor="inputCruise">Cruise</label>	
						<input type="text" className="form-control" id="inputCruise" placeholder={match.params.cruise} />
					</div>
				</div>
			</fieldset>
		</form>
	);
};

BookingForm.propTypes = {
	match: PropTypes.object	
};

export default BookingForm;