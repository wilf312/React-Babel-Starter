'use strict';

var React = require('react');

var Navbar = React.createClass({
  render: function(){
    return(
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
            <ul className='nav navbar-nav'>
              <li><a href='https://facebook.github.io/react/'>React</a></li>
              <li><a href='https://babeljs.io/'>Babel</a></li>
              <li><a href='https://parse.com/'>Parse</a></li>
              <li><a href='https://www.firebase.com/'>Firebase</a></li>
            </ul>
        </div>
      </nav>
    )
  }
})

module.exports = Navbar;
