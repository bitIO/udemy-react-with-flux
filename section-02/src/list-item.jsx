const React = require('react');
const Firebase = require('firebase');

const rootUrl = 'https://torrid-fire-6309.firebaseio.com/';

module.exports = React.createClass({

  getInitialState() {
    return {
      done: this.props.item.done,
      text: this.props.item.text,
      textChanged: false,
    };
  },
  componentWillMount() {
    this.firebase = new Firebase(`${rootUrl}items/${this.props.item.key}`);
  },

  changesButtons() {
    if (!this.state.textChanged) {
      return null;
    }
    return [
      <button className="btn btn-default" onClick={this.handleSaveClick}>
        Save
      </button>,
      <button className="btn btn-default" onClick={this.handleUndoClick}>
        Undo
      </button>,
    ];
  },

  handleDeleteClick() {
    this.firebase.remove();
  },
  handleDoneChange(event) {
    const update = { done: event.target.checked };
    this.setState(update);
    this.firebase.update(update);
  },
  handleSaveClick() {
    this.firebase.update({ text: this.state.text });
    this.setState({ textChanged: false });
  },
  handleTextChange(event) {
    console.log(event);
    this.setState({
      text: event.target.value,
      textChanged: true,
    });
  },
  handleUndoClick() {
    this.setState({
      text: this.props.item.text,
      textChanged: false,
    });
  },

  render() {
    return (
      <div className="input-group">
        <span className="input-group-addon">
          <input
            type="checkbox"
            checked={this.state.done}
            onChange={this.handleDoneChange}
          />
        </span>
        <input
          disabled={this.state.done}
          onChange={this.handleTextChange}
          type="text" className="form-control" value={this.state.text}
        />
        <span className="input-group-btn">
          {this.changesButtons()}
          <button
            className="btn btn-default"
            onClick={this.handleDeleteClick}
          >
            Delete
          </button>
        </span>
      </div>
    );
  },
});
