'use strict';
import React, { Component} from 'react';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="jumbotron">
				<h1>Hello, world!</h1>
				<p>...</p>
				<p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
			</div>
		);
	}

}