'use strict';
import React from 'react';

const BookingForm = () => {
	return (
		<form className="form-horizontal">
			<fieldset>
				<div className="form-group">
					<label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
					<div className="col-lg-10">
						<input type="text" className="form-control" id="inputEmail" placeholder="Email" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
					<div className="col-lg-10">
						<input type="password" className="form-control" id="inputPassword" placeholder="Password" />
						<div className="checkbox">
							<label>
								<input type="checkbox" /> Checkbox
							</label>
						</div>
					</div>
				</div>
			</fieldset>
		</form>
	);
};

export default BookingForm;