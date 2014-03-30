/** @jsx React.DOM */

var React = require('react');


var CommentBox = React.createClass({

  handleClick: function(){
    console.log(this);
  },

  render: function() {
    return (
      <div 
        onClick={this.handleClick}
        className="commentBox">
        Hello, world!.
      </div>
    );
  }
});

if (typeof window !== 'undefined') {
  React.renderComponent(
    <CommentBox />,
    document.getElementById('content')
  );
}

module.exports = CommentBox;