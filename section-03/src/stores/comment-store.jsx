const Reflux = require('reflux');

const Api = require('../utils/api');
const Actions = require('../actions');

const _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  getImage(imageId) {
    Api
      .get(`gallery/${imageId}/comments`)
      .then((json) => {
        this.comment = json.data;
        this.triggerChange();
      });
  },

  triggerChange() {
    this.trigger('change', this.comment);
  }
});
