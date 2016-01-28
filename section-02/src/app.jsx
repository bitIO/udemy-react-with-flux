const React = require('react');
const ReactDOM = require('react-dom');
const ReactFire = require('reactfire');
const Firebase = require('firebase');

const rootUrl = 'https://torrid-fire-6309.firebaseio.com/';

const Header = require('./header');
const List = require('./list');

const Hello = React.createClass({

  mixins: [ReactFire],

  getInitialState() {
    return {
      items: {},
      loaded: false,
    };
  },


  componentWillMount() {
    this.firebase = new Firebase(`${rootUrl}items/`);
    this.bindAsObject(this.firebase, 'items');
    this.firebase.on('value', this.handleDataLoaded);
  },

  deleteButton() {
    if (this.state.loaded) {
      return (
        <div className="text-center clear-complete">
          <hr />
          <button
            className="btn btn-primary"
            onClick={this.handleDeleteDoneClick}
            type="button"
          >
            Clear Complete
          </button>
        </div>
      );
    }
  },

  handleDataLoaded() {
    this.setState({ loaded: true });
  },
  handleDeleteDoneClick() {
    for (var key in this.state.items) {
      if (this.state.items.hasOwnProperty(key)) {
        if (this.state.items[key].done === true) {
          this.firebase.child(key).remove();
        }
      }
    }
  },

  render() {
    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">
            To-Do List
          </h2>
          <Header itemsStore={this.firebaseRefs.items} />
          <hr />
          <div className={'content ' + (this.state.loaded ? 'loaded' : '')}>
            <List items={this.state.items} />
            {this.deleteButton()}
          </div>
        </div>
      </div>
    );
  },
});

const element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
