import React, { Component } from 'react';
import { Route, Link, Redirect} from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Link to="/" >
          <img className="header-image" src="http://karkkikammo.net/wp-content/uploads/2017/10/cropped-leimasin_annukka-1.png"/>
          <p>the portfolio of</p>
          <h1>Annukka Laine</h1>
        </Link>
        <p><a href="mailto:annukka@karkkikammo.net">annukka@karkkikammo.net</a></p>
        <p><a href="http://karkkikammo.tumblr.com">tumblr</a></p>
      </div>
    );
  }
}

export default Header;
