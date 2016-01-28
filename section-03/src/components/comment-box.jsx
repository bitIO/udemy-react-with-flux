const React = require('react');

module.exports = React.createClass({
  renderComments() {
    return this.props.comments.slice(0,20).map((comment) => {
      return (<li key={comment.id} className="list-group-item comment-box">
        <span className="badge">{comment.ups}</span>
        <h5>{comment.author}</h5>
        {comment.comment}
      </li>);
    });
  },
  render() {
    return (<div>
      <ul className="list-group">
        {this.renderComments()}
      </ul>
    </div>);
  },
});
