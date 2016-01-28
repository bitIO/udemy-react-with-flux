const React = require('react');

const Header = require('./header');
const TopicList = require('./topic-list');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.content()}
      </div>
    );
  },
  content() {
    if (this.props.children) {
      return this.props.children;
    } else {
      return <TopicList />;
    }
  },
});
