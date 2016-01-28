const React = require('react');
const Reflux = require('reflux');

const Actions = require('../actions');
const ImageStore = require('../stores/image-store');
const ImagePreview = require('./image-preview');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ImageStore, 'onChange')],

  getInitialState() {
    return {
      images: [],
    };
  },

  componentWillMount() {
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps(nextProps) {
    Actions.getImages(nextProps.params.id);
  },

  onChange(event, images) {
    this.setState({ images });
  },

  renderImages() {
    return this.state.images.slice(0, 10).map((image) => {
      return <ImagePreview key={image.id} {...image} />
    });
  },

  render() {
    return (<div className="topic">
      {this.renderImages()}
    </div>);
  },
});
