import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill'; //Require to make use of Object.assign within Redux reducers

import AppContainer from './Containers/AppContainer';

render(
	<BrowserRouter >
		<AppContainer />
	</BrowserRouter>,
	document.getElementById('app')
);
