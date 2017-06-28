import React, { Component } from 'react';
import Routes from './Routes/Routes';
import Header from './Header/Header';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			menu: [
				{Route: 'Home', URL: '#'}, 
				{Route: 'Cruises', URL: 'Cruises'}, 
				{Route: 'Bookings', URL: 'Bookings'}, 
				{Route: 'Contact Us', URL: 'Contact'}
			]
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<div className='row'>
					<Header menu={this.state.menu} />
					<Routes />
				</div>
			</div>
		);
	}

}