const React = require('react');
const Reflux = require('reflux');
const Router = require('react-router');
const Link = Router.Link;

const Actions = require('../actions');
const TopicStore = require('../stores/topic-store');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(TopicStore, 'onChange')],

  getInitialState() {
    return {
      topics: [],
    };
  },

  componentWillMount() {
    Actions.getTopics();
  },

  onChange(event, topics) {
    this.setState({ topics });
  },

  renderTopics() {
    return this.state.topics.slice(0, 4).map((topic) => {
      return (<li key={topic.id}>
        <Link to={`topics/${topic.id}`} activeClassName="active">
          {topic.name}
        </Link>
      </li>);
    });
  },
  render() {
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Imgur Browser
          </Link>
          <ul className="nav navbar-nav navbar-right">
            {this.renderTopics()}
          </ul>
        </div>
      </nav>
    );
  },
});
