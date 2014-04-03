/** @jsx React.DOM */

var React = require('react');


var Link = React.createClass({
  render: function() {
    return (
      <div className="link">
        <h2 className="link-author">
          {this.props.title}
        </h2>
      </div>
    );
  }
});

var ListOfLinks = React.createClass({
  render: function() {
    var linkNodes = this.props.data.map(function (link) {
      return <Link title={link.data.title}></Link>;
    });
    return (
      <div className="link-list">
        {linkNodes}
      </div>
    );
  }
});

module.exports = ListOfLinks;