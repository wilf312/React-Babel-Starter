'use strict';

var React = require('react');
var Navbar = require('./Navbar');
var Jumbotron = require('./Jumbotron');

var App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
          <Navbar />
          <Jumbotron />
      </div>
    )
  }
})

React.render(<App />, document.getElementById('root'));
