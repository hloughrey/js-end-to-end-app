import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Components/Header/Header';

export default class AppContainer extends Component {
	constructor() {
		super();
		this.state = {
			menu: [
				{Route: 'Home', URL: '#'}, 
				{Route: 'Cruises', URL: 'Cruises'}, 
				{Route: 'Deals', URL: 'Deals'}, 
				{Route: 'Contact Us', URL: 'Contact'}
			]
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<div className='row'>
					<Header menu={this.state.menu} />
					{this.props.children}
				</div>
			</div>
		);
	}

}


AppContainer.propTypes = {
	children: PropTypes.array.isRequired
};