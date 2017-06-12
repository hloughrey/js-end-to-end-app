import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import AppContainer from '../Containers/AppContainer';
import HomePage from '../Components/HomePage/HomePage';
import Cruises from '../Components/Cruises/Cruises';

render(
  <BrowserRouter >
    <AppContainer>
      <Route exact path='/' component={HomePage} />
      <Route path='/crusies' component={Cruises} />
    </AppContainer>
  </BrowserRouter>,
  document.getElementById('app')
);
