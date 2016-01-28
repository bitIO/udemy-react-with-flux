const React = require('react');
const Reflux = require('reflux');

const ImageStore = require('../stores/image-store');
const CommentStore = require('../stores/comment-store');
const Actions = require('../actions');

const CommentBox =require('./comment-box');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange'),
    Reflux.listenTo(CommentStore, 'onChange'),
  ],

  getInitialState() {
    return {
      image: null,
      comment: null,
    };
  },
  componentWillMount() {
    // calls both the getImage from image-store and comment-store
    // flux style!!!!
    Actions.getImage(this.props.params.id);
  },

  onChange() {
    this.setState({
      image: ImageStore.find(this.props.params.id),
      comment: CommentStore.comment,
    });
  },

  renderComments() {
    if (!this.state.comment) {
      return null;
    }
    return <CommentBox comments={this.state.comment} />
  },
  renderContent() {
    return (<div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>{this.state.image.title}</h4>
        </div>
      </div>
      <div className="panel-body">
        {this.renderImage()}
      </div>
      <div className="panel-footer">
        {this.state.image.description}
      </div>
      <h3>Comments</h3>
      {this.renderComments()}
    </div>);
  },
  renderImage() {
    if (this.state.image.animated) {
      return (
        <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
          <source src={this.state.image.mp4} type="video/mp4" />
        </video>
      );
    } else {
      return <img src={this.state.image.link} />
    }
  },
  render() {
    return (<div className="image-detail">
      {this.state.image ? this.renderContent() : null }
    </div>);
  },
});
