'use strict';

var React = require('react');

var Navbar = React.createClass({
  render: function(){
    return(
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
            <ul className='nav navbar-nav'>
              <li><a href='http://www.pennymacusa.com/purchasing'>Purchasing</a></li>
              <li><a href='http://www.pennymacusa.com/refinance'>Refinance</a></li>
              <li><a href='http://www.pennymacusa.com/relief-and-assistance'>Relief &amp; Assistance</a></li>
            </ul>
        </div>
      </nav>
    )
  }
})

module.exports = Navbar;
