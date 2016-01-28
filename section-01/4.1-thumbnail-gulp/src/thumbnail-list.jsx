const React = require('react');
const Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render() {
    const list = this.props.thumbnailData.map((thumbnailProps) => {
      return <Thumbnail {...thumbnailProps}/>;
    });
    return <div>{list}</div>;
  }
});
