'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import styles from './Header.scss';

const Header = (props) => {

	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
				</div>
				<div id="navbar" className="navbar-collapse collapse">
					<ul className="nav nav-justified">
						{props.menu.map((item, index) => {
							return (item === 'Home') ? <li key={index}><a href={`/${item.URL}`} className='active'>{item.Route}</a></li> 
								: <li key={index}><Link to={`/${item.URL}`} className='active'>{item.Route}</Link></li>;
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

Header.propTypes = {
	menu: PropTypes.array.isRequired
};


export default Header;