const React = require('react');
const Reflux = require('reflux');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const TopicStore = require('../stores/topic-store');
const Actions = require('../actions');

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
    // this.setState({ topics: topics });
    this.setState({ topics });
  },

  renderTopics() {
    return this.state.topics.slice(0, 4).map((topic) => {
      return (
        <Link to={`topics/${topic.id}`} key={topic.id}
          className="list-group-item"
        >
          <h4>{topic.name}</h4>
          <p>{topic.description}</p>
        </Link>
      );
    });
  },
  render() {
    return (
      <div className="list-group">
        {this.renderTopics()}
      </div>
    );
  },
});
