import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HomePage from '../Components/HomePage/HomePage'

export default class HomePageContainer extends Component {
  constructor() {
    super()
    this.state = {
      menu: ['Home', 'Guides', 'Deals', 'Contact Us']
    }
  }

  render() {
    return (
      <div>
        <HomePage menu={this.state.menu}/>
      </div>
    )
  }

}
