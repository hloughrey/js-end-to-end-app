import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from '../Containers/AppContainer';
import HomePage from '../Components/HomePage/HomePage';
import Cruises from '../Components/Cruises/Cruises';


render(
  <AppContainer />,
  document.getElementById('app')
);
