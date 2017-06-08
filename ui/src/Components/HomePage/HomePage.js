'use strict';
import React, { Component } from 'react';

import Header from '../Header/Header'
import Table from '../Table/Table'
import './HomePage.scss';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Header menu={this.props.menu}/>
          <h2>Welcome to Cruise</h2>
          <Table />
        </div>
      </div>
    )
  }

}
