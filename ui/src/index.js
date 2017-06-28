import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill'; //Require to make use of Object.assign within Redux reducers

import App from './Components/App';

const store = configureStore();

render(
	<Provider store={store} >
		<BrowserRouter >
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);
