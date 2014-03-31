/** @jsx React.DOM */

var React = require('react');
var Header = require('./components/header');
var ListOfLinks = require('./components/link');



var MainLayout = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <ListOfLinks data={this.props.data} />
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