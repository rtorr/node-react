/** @jsx React.DOM */

var React = require('react');


var CommentBox = React.createClass({

  onClick: function(){
    console.log(this);
  },

  render: function() {
    return (
      <div className="commentBox">
        Hello, world! bro!.
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