'use strict';
const React = require('react');
const ListItem = require('./list-item');

module.exports = React.createClass({
  renderList() {
    // if (this.props.items && Object.keys(this.props.items).length === 0) {
    if (!this.props.items) {
      return <h4>Add a todo to get started</h4>;
    } else {
      const children = [];
      for (let key in this.props.items) {
        if (this.props.items.hasOwnProperty(key)) {
          const item = this.props.items[key];
          // we need to do this because the key is not propagated below
          item.key = key;

          children.push(
            <ListItem item={item} key={key} />
          );
        }
      }
      return children;
    }
  },

  render() {
    return <div className="listCONTAINER">{this.renderList()}</div>;
  },

});
