'use strict';
import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import Cruises from '../Cruises/Cruises';
import BookingForm from '../../Containers/BookingFormContainer';

import styles from './Routes.scss';

const Routes = () => (
	<main className={styles.mainContent}>
		<Route exact path='/' component={HomePage} />
		<Route exact path='/cruises' component={Cruises} />
		<Route exact path='/bookings' component={BookingForm} />
		<Route path='/bookings/:cruise' component={BookingForm} />
	</main>
);

export default Routes;