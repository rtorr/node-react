/** @jsx React.DOM */

var React = require('react');


var Link = React.createClass({

  clickHandler: function(e){
    e.preventDefault();
    console.log(e)
  },

  render: function() {
    return (
      <div className="row link">
        <p className="col-12 link-author">
          <a onClick={this.clickHandler} href={this.props.url} target="_blank">{this.props.title}</a>
        </p>
      </div>
    );
  }
});

var ListOfLinks = React.createClass({
  render: function() {
    var linkNodes = this.props.data.map(function (link) {
      return <Link url={link.data.url} title={link.data.title}></Link>;
    });
    return (
      <div className="container">
        {linkNodes}
      </div>
    );
  }
});

module.exports = ListOfLinks;