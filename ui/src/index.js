import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'babel-polyfill'; //Require to make use of Object.assign within Redux reducers

import AppContainer from './Containers/AppContainer';
import HomePage from './Components/HomePage/HomePage';
import Cruises from './Components/Cruises/Cruises';

render(
	<BrowserRouter >
		<AppContainer>
			<Route exact path='/' component={HomePage} />
			<Route path='/cruises' component={Cruises} />
		</AppContainer>
	</BrowserRouter>,
	document.getElementById('app')
);
