'use strict';

var React = require('react');

var Jumbotron = React.createClass({
  render: function() {
    return(
      <div className="jumbotron">
          <h1>Hello React</h1>
          <p>Starter kit for Gulp, NPM, React and Babel.js</p>
          
          <p><a
            className='btn btn-primary btn-lg' href='https://babeljs.io/'>Learn More</a>
          </p>
      </div>
    )
  }
})

module.exports = Jumbotron;
