'use strict';

var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
          <h1>Hello PennyMac</h1>
          <p>Demonstration of the Gulpfile.js, Package.json and Babel.js</p>
          <p><a
            className='btn btn-primary btn-lg' href='https://babeljs.io/'>Learn More</a>
          </p>
      </div>
    )
  }
})

React.render(<App />, document.getElementById('root'));