/** @jsx React.DOM */

var React = require('react');


var MainLayout = React.createClass({

  handleClick: function(){
    console.log(this);
  },

  render: function() {
    return (
      <div 
        onClick={this.handleClick}
        className="hello-world">
        Hello, world!
      </div>
    );
  }
});

if (typeof window !== 'undefined') {
  React.renderComponent(
    <MainLayout />,
    document.getElementById('main')
  );
}

module.exports = MainLayout;