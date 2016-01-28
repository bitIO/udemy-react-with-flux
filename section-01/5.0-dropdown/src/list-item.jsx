const React = require('react');

module.exports = React.createClass({
  handleClick() {
    this.props.whenItemClicked( this.props.item );
  },
  render() {
    return (
      <li className={this.props.className}>
        <a onClick={this.handleClick}>{this.props.item}</a>
      </li>
    );
  },
});
