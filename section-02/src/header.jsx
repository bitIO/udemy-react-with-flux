const React = require('react');

module.exports = React.createClass({
  getInitialState() {
    return {
      text: '',
    };
  },

  _saveItem() {
    // send the value of text input to Firebase
    this.props.itemsStore.push({
      text: this.state.text,
      done: false,
    });
    this.setState({ text: '' });
  },

  handleClick() {
    this._saveItem();
  },
  handleInputChange(event) {
    this.setState({ text: event.target.value });
  },
  handleInputKeyDown(event) {
    switch (event.keyCode) {
      case 13:
        this._saveItem();
        break;
      case 27:
        this.setState({ text: '' });
        break;
      default:
        break;
    }
  },

  render() {
    return (
      <div className="input-group">
        <input
          value={this.state.text}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputKeyDown}
          type="text" className="form-control"
        />
        <span className="input-group-btn">
          <button
            onClick={this.handleClick}
            className="btn btn-default" type="button"
          >
            Add
          </button>
        </span>
      </div>
    );
  },

});
