const React = require('react');
const Button = require('./button');
const ListItem = require('./list-item');

module.exports = React.createClass({
  getInitialState() {
    return {
      open: false,
    };
  },
  handleClick() {
    this.setState({ open: !this.state.open });
  },
  handleItemClick( item ) {
    this.setState({
      open: false,
      itemTitle: item,
    });
  },
  render() {
    const list = this.props.items.map((item) => {
      return (
        <ListItem
          item={item}
          whenItemClicked={this.handleItemClick}
          className={this.state.itemTitle === item ? 'active' : ''}
        />
      );
    });
    return (
      <div className="dropdown">
        <Button
          whenClicked={this.handleClick}
          className="btn-default"
          title={this.state.itemTitle || this.props.title}
          subTitleClassName="caret"
        />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
          {list}
        </ul>
      </div>
    );
  }
});
