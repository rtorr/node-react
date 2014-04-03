/** @jsx React.DOM */

var React = require('react');
var Header = require('./components/header');
var ListOfLinks = require('./components/link');
var client = require('../client');

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
  client(function(data){
    //data={data}
    React.renderComponent(
      <MainLayout data={data}/>,
      document.getElementById('main')
    );
  })
}

module.exports = MainLayout;