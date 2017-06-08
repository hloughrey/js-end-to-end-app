'use strict';
import React, { Component } from 'react';

import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav nav-justified">
              {this.props.menu.map((item, index) => {
                return <li key={index}><a href="#">{item}</a></li>
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}
