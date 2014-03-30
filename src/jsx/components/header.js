/** @jsx React.DOM */

var React = require('react');

var Header = React.createClass({

  handleClick: function(){
    console.log(this);
  },

  render: function() {
    return (
      <div className="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
        <div className="container">
          <div className="navbar-header">
            <a onClick={this.handleClick} href="#" className="navbar-brand">node-react</a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;