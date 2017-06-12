import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Header from '../Components/Header/Header'
import Cruises from '../Components/Cruises/Cruises'

export default class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      menu: ['Home', 'Cruise', 'Deals', 'Contact Us']
    }
  }

  render() {
    return (
        <div className="container-fluid">
            <div className='row'>
              {this.props.children}
            </div>
        </div>
    );
  };

};


AppContainer.PropTypes = {
  children: PropTypes.object.isRequired
};