'use strict';
import React, { Component } from 'react';
import axios from 'axios';

export default class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cruises: []
		};

		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		console.log('You clicked a row...this should do something clever!', e);
	}

	componentDidMount() {
		axios.get('http://localhost:3000/cruises')
			.then((result) => {
				this.setState({cruises: result.data});
			});
	}

	render() {
		if (this.state.cruises.length === 0) {
			return (
				<table className='table table-hover'>
					<thead>
						<tr>
							<th>Cruise Liner</th>
							<th>First Port</th>
							<th>Last Port</th>
							<th>Price</th>
						</tr>
					</thead>
				</table>
			);
		} else {
			return (
				<table className='table table-hover'>
					<thead>
						<tr>
							<th>Cruise Liner</th>
							<th>First Port</th>
							<th>Last Port</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{this.state.cruises.data.map((cruise, index) => {
							return <tr key={index} onClick={this.onClick}><td>{cruise.liner}</td><td>{cruise.first_port}</td><td>{cruise.last_port}</td><td>£{cruise.price}</td></tr>;
						})}
					</tbody>
				</table>
			);
		}
	}
}
