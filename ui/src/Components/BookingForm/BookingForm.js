'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookingForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			booking: {
				cruise: '',
				name: '',
				email: ''
			}
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(element, e) {
		let newState = Object.assign({}, this.state.booking);
		newState[element] = e.target.value;
		this.setState({booking: newState});
	}

	onSubmit(e){
		console.log(e);
	}



	componentWillMount() {
		if(this.props.match.params.cruise) {
			let newState = Object.assign({}, this.state.booking);
			newState.cruise = this.props.match.params.cruise;
			this.setState({booking: newState});
		}
	}

	componentWillUnmount() {
		this.setState({
			booking: {
				cruise: '',
				name: '',
				email: ''
			}
		});
	}

	render() {
		return (
			<div className='col-md-6'>
				<form className='form-horizontal'>
					<fieldset>
						<legend>Booking Form</legend>
						<div className='form-group'>
							<div className='col-lg-12'>
								<label htmlFor='inputCruise'>Cruise</label>
								<input type='text' className='form-control' id='inputCruise' name='cruise' onChange={(e) => this.onChange('cruise', e)} value={this.state.booking.cruise ? this.state.booking.cruise : ''} />
							</div>
						</div>
						<div className='form-group'>
							<div className='col-lg-12'>
								<label htmlFor='inputCruise'>Name</label>
								<input type='text' className='form-control' id='inputName' name='name' onChange={(e) => this.onChange('name', e)} value={this.state.booking.name} />
							</div>
						</div>
						<div className='form-group'>
							<div className='col-lg-12'>
								<label htmlFor='inputCruise'>Email</label>
								<input type='text' className='form-control' id='inputEmail' name='email' onChange={(e) => this.onChange('email', e)} value={this.state.booking.email} />
							</div>
						</div>
						<div className='form-group'>
							<div className='col-lg-12'>
								<button type='submit' className='btn btn-primary' onClick={this.props.onFormSubmit}>Submit</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		);
	}


}

BookingForm.propTypes = {
	match: PropTypes.object,
	onFormSubmit: PropTypes.func
};

export default BookingForm;