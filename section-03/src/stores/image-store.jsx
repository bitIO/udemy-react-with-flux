const Reflux = require('reflux');

const Api = require('../utils/api');
const Actions = require('../actions');

const _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  find(imageId) {
    const image = _.find(this.images, { id: imageId });
    if (!image) {
      this.getImage(imageId);
    }
    return image;
  },
  getImage(imageId) {
    return Api
      .get(`gallery/image/${imageId}`)
      .then((json) => {
        if (!this.images) {
          this.images = [];
        }
        this.images.push(json.data);
        this.triggerChange();
      });
  },
  getImages(topicId) {
    return Api
      .get(`topics/${topicId}`)
      .then((json) => {
        this.images = _.reject(json.data, (image) => {
          return image.is_album;
        });
        this.triggerChange();
      });
  },
  triggerChange() {
    this.trigger('change', this.images);
  },
});
