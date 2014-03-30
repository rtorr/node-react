/** @jsx React.DOM */

var React = require('react');
var Header = require('./components/header');

var MainLayout = React.createClass({

  render: function() {
    return (
      <Header />
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