const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState() {
    return {
      hovering: false,
    };
  },

  handleOnMouseEnter() {
    this.setState({ hovering: true });
  },
  handleOnMouseLeave() {
    this.setState({ hovering: false });
  },

  icon() {
    return <span className="glyphicon glyphicon-play"/>;
  },
  image() {
    return <img src={this.props.link} alt="..."/>;
  },
  inset() {
    return (<div className="inset">
      Views: {this.props.views}
      <br />
      Upvotes: {this.props.ups}
    </div>);
  },
  video() {
    return (
      <div>
        <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
          <source src={this.props.mp4}></source>
        </video>
      </div>
    );
  },

  render() {
    return (
      <Link
        to={`images/${this.props.id}`}
        key={this.props.id} className="image-preview"
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        {this.props.animated && this.state.hovering ? this.video() : this.image()}
        {this.props.animated && !this.state.hovering ? this.icon() : null}
        {this.state.hovering ? this.inset() : null }
      </Link>
    );
  },
});
