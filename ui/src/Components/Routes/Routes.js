'use strict';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import Cruises from '../Cruises/Cruises';
import BookingForm from '../BookingForm/BookingForm';


const Routes = () => (
	<main>
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/cruises' component={Cruises} />
			<Route exact path='/booking' component={BookingForm} />
		</Switch>
	</main>
);

export default Routes;